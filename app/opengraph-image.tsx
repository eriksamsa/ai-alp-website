import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AlpAI – Tvoja pot do novih razgledov';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0c2d56 0%, #1a4f8a 60%, #0e3d72 100%)',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Green glow */}
        <div
          style={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(70,182,120,0.25), transparent 70%)',
          }}
        />

        {/* Logo chip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              borderRadius: 18,
              background: 'linear-gradient(145deg, #071626, #16704a)',
              border: '1px solid rgba(159,230,188,0.4)',
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: '#9fe6bc',
              }}
            />
          </div>
          <span style={{ color: '#9fe6bc', fontSize: 28, fontWeight: 800, letterSpacing: 2 }}>
            AlpAI
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: '#ffffff',
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 1.0,
            marginBottom: 24,
            maxWidth: 800,
          }}
        >
          Pametnejše načrtovanje gorskih tur.
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: 'rgba(159,230,188,0.9)',
            fontSize: 30,
            fontWeight: 500,
            maxWidth: 700,
          }}
        >
          AI priprava · Vreme · Varnost · Slovenske gore
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 52,
            right: 80,
            color: 'rgba(255,255,255,0.4)',
            fontSize: 22,
          }}
        >
          ai-alp.com
        </div>
      </div>
    ),
    { ...size },
  );
}
