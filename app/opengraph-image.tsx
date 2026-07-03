import { ImageResponse } from 'next/og';
import { site } from '@/content/site';

export const runtime = 'edge';
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0A0A0B',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            display: 'flex',
          }}
        />
        {/* Accent glow */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            background:
              'radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            color: '#8B8B92',
            fontSize: 16,
            fontFamily: 'monospace',
            letterSpacing: 2,
            textTransform: 'uppercase',
            position: 'relative',
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              background: '#34D399',
              display: 'flex',
            }}
          />
          Nitin Kapil · Portfolio
        </div>

        {/* Main heading */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 'auto',
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              color: '#EDEDEF',
              letterSpacing: -4,
              lineHeight: 0.95,
              display: 'flex',
            }}
          >
            Decoding the
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: -4,
              lineHeight: 0.95,
              display: 'flex',
              background:
                'linear-gradient(135deg, #A78BFA 0%, #B8A0FB 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            digital world.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 40,
            color: '#8B8B92',
            fontSize: 20,
            fontFamily: 'monospace',
            position: 'relative',
          }}
        >
          <span>MERN · AI · Hyderabad</span>
          <span>nitinkapil.dev</span>
        </div>
      </div>
    ),
    { ...size }
  );
}