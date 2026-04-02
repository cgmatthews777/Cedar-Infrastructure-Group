const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_TOTAL_SIZE = 10 * 1024 * 1024;
const MAX_FILES = 3;
const ALLOWED_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
  'application/rtf',
  'text/rtf',
]);
const ALLOWED_EXT = /\.(pdf|doc|docx|txt|rtf)$/i;
const NOTIFY_TO = 'join@hirecedar.com';
const NOTIFY_FROM = 'Cedar Intake <intake@hirecedar.com>';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS },
  });
}

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  const chunks = [];
  for (let i = 0; i < bytes.length; i += 8192) {
    chunks.push(String.fromCharCode.apply(null, bytes.slice(i, i + 8192)));
  }
  return btoa(chunks.join(''));
}

export async function onRequestOptions() {
  return new Response(null, { headers: CORS });
}

export async function onRequestPost({ request, env }) {
  try {
    const formData = await request.formData();
    const fields = {};
    const files = [];
    let totalSize = 0;

    for (const [key, value] of formData.entries()) {
      if (value instanceof File && value.size > 0) {
        if (files.length >= MAX_FILES) {
          return json({ success: false, error: `Maximum ${MAX_FILES} files allowed.` }, 400);
        }
        if (value.size > MAX_FILE_SIZE) {
          return json({ success: false, error: `File "${value.name}" exceeds 5MB limit.` }, 400);
        }
        if (!ALLOWED_TYPES.has(value.type) && !ALLOWED_EXT.test(value.name)) {
          return json({ success: false, error: `File "${value.name}" is not an allowed type. Use PDF, DOC, DOCX, TXT, or RTF.` }, 400);
        }
        totalSize += value.size;
        if (totalSize > MAX_TOTAL_SIZE) {
          return json({ success: false, error: 'Total file size exceeds 10MB limit.' }, 400);
        }
        files.push({
          name: value.name,
          type: value.type,
          size: value.size,
          data: await value.arrayBuffer(),
        });
      } else if (!(value instanceof File)) {
        if (fields[key]) {
          if (Array.isArray(fields[key])) fields[key].push(value);
          else fields[key] = [fields[key], value];
        } else {
          fields[key] = value;
        }
      }
    }

    const timestamp = new Date().toISOString();
    const name = (fields.specialistname || 'unknown').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const date = timestamp.split('T')[0];
    const prefix = `intake/${date}/${name}-${Date.now()}`;

    // Store in R2
    await env.CEDAR_INTAKE.put(
      `${prefix}/submission.json`,
      JSON.stringify({ ...fields, timestamp, fileCount: files.length, fileNames: files.map(f => f.name) }, null, 2),
      { httpMetadata: { contentType: 'application/json' } }
    );
    for (const file of files) {
      await env.CEDAR_INTAKE.put(`${prefix}/${file.name}`, file.data, {
        httpMetadata: { contentType: file.type },
      });
    }

    // Send email via Resend (don't let email failure kill the submission)
    if (env.RESEND_API_KEY) {
      try {
        const certs = Array.isArray(fields.cert) ? fields.cert.join(', ') : (fields.cert || 'None');
        const html = `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#0A140D;border-bottom:2px solid #8B7355;padding-bottom:8px;">Specialist Intake Submission</h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:6px 12px;font-weight:bold;color:#8B7355;width:160px;">Name</td><td style="padding:6px 12px;">${fields.specialistname || ''}</td></tr>
              <tr style="background:#f9f9f7;"><td style="padding:6px 12px;font-weight:bold;color:#8B7355;">Email</td><td style="padding:6px 12px;">${fields.specialistemail || ''}</td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;color:#8B7355;">Phone</td><td style="padding:6px 12px;">${fields.specialistphone || 'Not provided'}</td></tr>
              <tr style="background:#f9f9f7;"><td style="padding:6px 12px;font-weight:bold;color:#8B7355;">Location</td><td style="padding:6px 12px;">${fields.specialistlocation || ''}</td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;color:#8B7355;">LinkedIn</td><td style="padding:6px 12px;">${fields.linkedin || 'Not provided'}</td></tr>
            </table>
            <h3 style="color:#0A140D;margin-top:20px;border-bottom:1px solid #ddd;padding-bottom:6px;">Experience</h3>
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:6px 12px;font-weight:bold;color:#8B7355;width:160px;">Discipline</td><td style="padding:6px 12px;">${fields.discipline || ''}</td></tr>
              <tr style="background:#f9f9f7;"><td style="padding:6px 12px;font-weight:bold;color:#8B7355;">Years</td><td style="padding:6px 12px;">${fields.experience || ''}</td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;color:#8B7355;">Engagement Type</td><td style="padding:6px 12px;">${fields.engagementtype || ''}</td></tr>
              <tr style="background:#f9f9f7;"><td style="padding:6px 12px;font-weight:bold;color:#8B7355;">Certifications</td><td style="padding:6px 12px;">${certs}</td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;color:#8B7355;">Other Certs</td><td style="padding:6px 12px;">${fields.othercerts || 'None'}</td></tr>
              <tr style="background:#f9f9f7;"><td style="padding:6px 12px;font-weight:bold;color:#8B7355;">Platforms</td><td style="padding:6px 12px;">${fields.specialiststack || ''}</td></tr>
            </table>
            <h3 style="color:#0A140D;margin-top:20px;border-bottom:1px solid #ddd;padding-bottom:6px;">Availability</h3>
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:6px 12px;font-weight:bold;color:#8B7355;width:160px;">Start</td><td style="padding:6px 12px;">${fields.availability || ''}</td></tr>
              <tr style="background:#f9f9f7;"><td style="padding:6px 12px;font-weight:bold;color:#8B7355;">Weekly Hours</td><td style="padding:6px 12px;">${fields.weeklycapacity || ''}</td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;color:#8B7355;">Work Mode</td><td style="padding:6px 12px;">${fields.specialistworkmode || ''}</td></tr>
            </table>
            ${fields.specialistnotes ? `<h3 style="color:#0A140D;margin-top:20px;border-bottom:1px solid #ddd;padding-bottom:6px;">Notes</h3><p style="font-size:14px;color:#333;">${fields.specialistnotes}</p>` : ''}
            <p style="font-size:12px;color:#999;margin-top:24px;border-top:1px solid #eee;padding-top:12px;">
              ${files.length} file(s) attached. R2 backup: <code>${prefix}/</code><br>
              Submitted ${timestamp}
            </p>
          </div>
        `;

        const attachments = files.map(f => ({
          filename: f.name,
          content: arrayBufferToBase64(f.data),
        }));

        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: NOTIFY_FROM,
            to: NOTIFY_TO,
            subject: `Specialist Intake — ${fields.specialistname || 'Unknown'}`,
            html,
            attachments: attachments.length > 0 ? attachments : undefined,
          }),
        });
      } catch (emailErr) {
        // Email failed but submission is saved in R2
      }
    }

    return json({ success: true, message: 'Submission received.' });
  } catch (err) {
    return json({ success: false, error: 'Submission failed. Please try again.' }, 500);
  }
}
