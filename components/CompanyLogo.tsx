import Image from 'next/image'

type Company = 'targusinfo' | 'verisk' | '66degrees' | 'ltv-co' | 'think-unlimited' | 'strategio' | 'fwd'

interface Config {
  src: string
  width: number
  height: number
}

const NAMES: Record<Company, string> = {
  targusinfo: 'TargusInfo',
  verisk: 'Verisk',
  '66degrees': '66degrees',
  'ltv-co': 'LTV Co.',
  'think-unlimited': 'Think Unlimited',
  strategio: 'Strategio',
  fwd: 'Forward Costa Rica',
}

const configs: Record<Company, Config> = {
  targusinfo:        { src: '/logos/targusinfo.png',      width: 180, height: 39  },
  verisk:            { src: '/logos/verisk.svg',           width: 220, height: 54  },
  '66degrees':       { src: '/logos/66degrees.svg',        width: 240, height: 57  },
  'ltv-co':          { src: '/logos/ltv-co.svg',           width: 80,  height: 80  },
  'think-unlimited': { src: '/logos/think-unlimited.png',  width: 200, height: 105 },
  strategio:         { src: '/logos/strategio.png',        width: 220, height: 64  },
  fwd:               { src: '/logos/fwd.png',              width: 200, height: 100 },
}

export default function CompanyLogo({
  company,
  variant = 'card',
}: {
  company: Company
  variant?: 'card' | 'page'
}) {
  const cfg = configs[company]
  if (!cfg) return null

  const scale = variant === 'card' ? 0.55 : 1
  const w = Math.round(cfg.width * scale)
  const h = Math.round(cfg.height * scale)

  return (
    <Image
      src={cfg.src}
      alt={`${NAMES[company]} logo`}
      width={w}
      height={h}
      sizes={`${w}px`}
      unoptimized={cfg.src.endsWith('.svg')}
      style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
      priority={variant === 'page'}
    />
  )
}
