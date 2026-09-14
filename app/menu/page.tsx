"use client"

import { useState } from "react"
import styles from "./menu.module.css"
import { menuItems, type MenuCategory } from "@/lib/menu"
import { SiteNav } from "@/components/site-nav"

const categoryOrder: MenuCategory[] = ["덮밥", "쌀국수 / 면류", "라구 / 파스타", "라멘 / 마라", "돈까스"]
const presentCategories = new Set(menuItems.map((item) => item.category))
const categories = ["전체", ...categoryOrder.filter((category) => presentCategories.has(category))]

export default function MenuPage() {
  const [active, setActive] = useState("전체")

  const visibleItems = active === "전체" ? menuItems : menuItems.filter((item) => item.category === active)

  return (
    <main className={styles.screen}>
      <SiteNav />
      <h1 className={styles.title}>전체 메뉴</h1>

      <div className={styles.filters}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`${styles.filter} ${active === category ? styles.filterActive : ""}`}
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visibleItems.map((item) => (
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
