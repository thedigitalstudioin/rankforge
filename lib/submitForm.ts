export async function submitToGoogleSheet(data: {
  name: string;
  email: string;
  phone: string;
  website: string;
  message?: string;
  formType: string;
  page: string;
}) {
  const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

  if (!GOOGLE_SCRIPT_URL) {
    console.warn('Google Script URL not configured');
    return { ok: false, error: 'Form submission not configured' };
  }

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });
    return { ok: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return { ok: false, error: 'Submission failed' };
  }
}
