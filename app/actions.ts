'use server';

export async function joinWaitlist(formData: FormData): Promise<{ success: boolean; message: string }> {
  const email = String(formData.get('email') ?? '').trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: 'Vnesite veljaven email naslov.' };
  }

  const endpoint = process.env.WAITLIST_WEBHOOK_URL;

  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'alpai-website', timestamp: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Webhook status ${res.status}`);
    } catch (err) {
      console.error('[waitlist] webhook error:', err);
      return { success: false, message: 'Prišlo je do napake. Poskusite znova.' };
    }
  } else {
    // Fallback: log locally (replace with real service in production)
    console.log(`[waitlist] new signup: ${email}`);
  }

  return { success: true, message: 'Prijava uspešna! Obvestili vas bomo ob izidu.' };
}
