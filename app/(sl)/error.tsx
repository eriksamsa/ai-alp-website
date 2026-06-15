'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="content-page" style={{ textAlign: 'center', paddingTop: '6rem' }}>
      <h1 style={{ color: '#ffffff', fontSize: '1.5rem' }}>Prišlo je do napake</h1>
      <p style={{ color: '#8a9aaa', marginBottom: '2rem' }}>
        Stran se ni mogla naložiti. Prosimo, poskusite znova.
      </p>
      <button
        onClick={reset}
        className="button primary"
        style={{ margin: '0 auto' }}
      >
        Poskusi znova
      </button>
    </section>
  );
}
