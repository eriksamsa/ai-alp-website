'use client';

import { useActionState, useRef } from 'react';
import { joinWaitlist } from './actions';

const initialState = { success: false, message: '' };

const t = {
  sl: {
    placeholder: 'vas@email.com',
    submit: 'Obvesti me',
    submitting: 'Prijavljam…',
  },
  en: {
    placeholder: 'your@email.com',
    submit: 'Notify me',
    submitting: 'Signing up…',
  },
};

interface Props {
  lang?: 'sl' | 'en';
}

export default function WaitlistForm({ lang = 'sl' }: Props) {
  const [state, action, pending] = useActionState(joinWaitlist, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const tx = t[lang];

  if (state.success && formRef.current) {
    formRef.current.reset();
  }

  return (
    <form ref={formRef} action={action} className="waitlist-form">
      <div className="waitlist-input-row">
        <input type="hidden" name="lang" value={lang} />
        <input
          type="email"
          name="email"
          placeholder={tx.placeholder}
          required
          className="waitlist-input"
          aria-label={lang === 'en' ? 'Email address for launch notification' : 'Email naslov za obvestilo ob izidu'}
        />
        <button type="submit" className="button primary waitlist-btn" disabled={pending}>
          {pending && <span className="waitlist-spinner" aria-hidden="true" />}
          {pending ? tx.submitting : tx.submit}
        </button>
      </div>
      {state.message && (
        <p
          className={`waitlist-msg ${state.success ? 'waitlist-msg--ok' : 'waitlist-msg--err'}`}
          role="status"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
