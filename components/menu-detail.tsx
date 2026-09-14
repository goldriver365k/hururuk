"use client"

import { useEffect } from "react"
import styles from "./menu-detail.module.css"
import type { MenuItem } from "@/lib/menu"

export function MenuDetail({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true" aria-label={item.name} onClick={onClose}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.close} aria-label="닫기" onClick={onClose}>
          ×
        </button>
        <img className={styles.image} src={item.image || "/placeholder.svg"} alt={item.name} />
        <div className={styles.info}>
          <span className={styles.tagline}>{item.tagline}</span>
          <span className={styles.name}>{item.name}</span>
        </div>
      </div>
    </div>
  )
}
