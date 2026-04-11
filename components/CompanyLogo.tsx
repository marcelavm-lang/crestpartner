import Image from 'next/image'

type Company = 'targusinfo' | 'verisk' | '66degrees' | 'ltv-co' | 'think-unlimited' | 'strategio' | 'fwd'

interface Config {
  src: string
  width: number
  height: number
}

const configs: Record<Company, Config> = {
  targusinfo:        { src: '/logos/targusinfo.png',      width: 180, height: 54  },
  verisk:            { src: '/logos/verisk.png',           width: 220, height: 66  },
  '66degrees':       { src: '/logos/66degrees.png',        width: 240, height: 57  },
  'ltv-co':          { src: '/logos/ltv-co.png',           width: 80,  height: 80  },
  'think-unlimited': { src: '/logos/think-unlimited.png',  width: 200, height: 100 },
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

  /* For card variant, normalise all logos to the same visual height */
  const cardHeight = 28
  const cardStyle: React.CSSProperties =
    variant === 'card'
      ? { objectFit: 'contain' as const, height: cardHeight, width: 'auto' }
      : { objectFit: 'contain' as const, maxWidth: '100%' }

  return (
    <Image
      src={cfg.src}
      alt={company}
      width={w}
      height={h}
      style={cardStyle}
      priority={variant === 'page'}
    />
  )
}
