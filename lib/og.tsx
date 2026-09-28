import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

/** Reverso (dark-background) logo as a data URI for Satori. */
async function loadReversoLogo(): Promise<string | null> {
  try {
    const svg = await readFile(
      join(process.cwd(), 'public', 'crest-partners-logo', 'svg', 'crest-partners-logo-reverso.svg')
    )
    return `data:image/svg+xml;base64,${svg.toString('base64')}`
  } catch (err) {
    console.error('[og] Could not load reverso logo:', err)
    return null
  }
}

async function loadSpartan() {
  try {
    const dir = join(process.cwd(), 'public', 'fonts')
    const [bold, regular] = await Promise.all([
      readFile(join(dir, 'Spartan-Bold.ttf')),
      readFile(join(dir, 'Spartan-Regular.ttf')),
    ])
    return [
      { name: 'Spartan', data: bold, weight: 700 as const, style: 'normal' as const },
      { name: 'Spartan', data: regular, weight: 400 as const, style: 'normal' as const },
    ]
  } catch (err) {
    console.error('[og] Could not load Spartan font, falling back to default:', err)
    return undefined
  }
}

/** Shared navy Open Graph card (1200×630). */
export async function renderOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  const [fonts, logo] = await Promise.all([loadSpartan(), loadReversoLogo()])
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 90px',
          background: '#0E2233',
          fontFamily: fonts ? 'Spartan' : 'sans-serif',
        }}
      >
        {eyebrow && (
          <div style={{ display: 'flex', fontSize: 26, fontWeight: 700, letterSpacing: 4, color: '#5FD4CB', marginBottom: 28 }}>
            {eyebrow.toUpperCase()}
          </div>
        )}
        <div style={{ display: 'flex', fontSize: title.length > 40 ? 64 : 84, fontWeight: 700, lineHeight: 1.12, color: '#FFFFFF', maxWidth: 1020 }}>
          {title}
        </div>
        {subtitle && (
          <div style={{ display: 'flex', fontSize: 30, fontWeight: 400, lineHeight: 1.35, color: '#C9D5E0', marginTop: 28, maxWidth: 980 }}>
            {subtitle}
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 56 }}>
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logo} width={400} height={58} alt="Crest Partners" />
          ) : (
            <div style={{ display: 'flex', fontSize: 30, fontWeight: 700, letterSpacing: 6, color: '#5FD4CB' }}>
              CREST PARTNERS
            </div>
          )}
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  )
}
