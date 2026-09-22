"use client"

import { useEffect, useState } from "react"

const FALLBACK_HIDE_MS = 10000

export function HeroIntro() {
  const [hidden, setHidden] = useState(false)
  const [closing, setClosing] = useState(false)

  const close = () => {
    setClosing(true)
    window.setTimeout(() => setHidden(true), 500)
  }

  useEffect(() => {
    const timer = window.setTimeout(close, FALLBACK_HIDE_MS)
    return () => window.clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div
      className={`fr-hero-intro${closing ? " is-closing" : ""}`}
      onClick={close}
      role="button"
      tabIndex={0}
      aria-label="인트로 영상 건너뛰기"
    >
      <video
        className="fr-hero-intro-video"
        src="/assets/video/hero-main.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={close}
      />
      <span className="fr-hero-intro-skip">건너뛰기 ✕</span>
    </div>
  )
}
