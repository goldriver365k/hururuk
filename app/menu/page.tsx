"use client"

import styles from "./menu.module.css"
import { menuItems } from "@/lib/menu"

export default function MenuPage() {
  return (
    <main className={styles.screen}>
      <h1 className={styles.title}>전체 메뉴</h1>

      <div className={styles.grid}>
        {menuItems.map((item) => (
          <button key={item.id} type="button" className={styles.card}>
            <img className={styles.thumb} src={item.image || "/placeholder.svg"} alt={item.name} />
            <span className={styles.info}>
              <span className={styles.tagline}>{item.tagline}</span>
              <span className={styles.name}>{item.name}</span>
            </span>
          </button>
        ))}
      </div>
    </main>
  )
}
