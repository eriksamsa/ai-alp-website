'use server';

const messages = {
  sl: {
    invalid: 'Vnesite veljaven email naslov.',
    error: 'Prišlo je do napake. Poskusite znova.',
    success: 'Prijava uspešna! Obvestili vas bomo ob izidu.',
  },
  en: {
    invalid: 'Please enter a valid email address.',
    error: 'Something went wrong. Please try again.',
    success: 'Signed up! We will notify you when AlpAI launches.',
  },
};

export async function joinWaitlist(
  _prev: { success: boolean; message: string },
  formData: FormData,
): Promise<{ success: boolean; message: string }> {
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const lang = (String(formData.get('lang') ?? 'sl') as 'sl' | 'en');
  const msg = messages[lang] ?? messages.sl;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: msg.invalid };
  }

  const endpoint = process.env.WAITLIST_WEBHOOK_URL;

  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, lang, source: 'alpai-website', timestamp: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Webhook status ${res.status}`);
    } catch (err) {
      console.error('[waitlist] webhook error:', err);
      return { success: false, message: msg.error };
    }
  } else {
    console.log(`[waitlist] new signup: ${email} (${lang})`);
  }

  return { success: true, message: msg.success };
}
