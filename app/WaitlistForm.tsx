'use client';

import { useActionState, useRef } from 'react';
import { joinWaitlist } from './actions';

const initialState = { success: false, message: '' };

export default function WaitlistForm() {
  const [state, action, pending] = useActionState(joinWaitlist, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  if (state.success) {
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={action} className="waitlist-form">
      <div className="waitlist-input-row">
        <input
          type="email"
          name="email"
          placeholder="vas@email.com"
          required
          className="waitlist-input"
          aria-label="Email naslov za obvestilo ob izidu"
        />
        <button type="submit" className="button primary waitlist-btn" disabled={pending}>
          {pending ? 'Prijavljam…' : 'Obvesti me'}
        </button>
      </div>
      {state.message && (
        <p className={`waitlist-msg ${state.success ? 'waitlist-msg--ok' : 'waitlist-msg--err'}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}
