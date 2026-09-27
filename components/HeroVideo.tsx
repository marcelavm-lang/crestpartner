'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

/**
 * Background media for the Home hero.
 * - Poster (first frame) always renders, so there's never a blank hero.
 * - The video only mounts on screens ≥1024px and when the user hasn't asked for
 *   reduced motion — mobile visitors never download it.
 */
export default function HeroVideo() {
  const [playVideo, setPlayVideo] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)')
    const update = () => setPlayVideo(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image
        src="/header-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {playVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/header-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/header-1280.webm" type="video/webm" />
          <source src="/header-1280.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  )
}
