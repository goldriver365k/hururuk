"use client"

import { useState } from "react"
import styles from "./menu.module.css"
import { menuItems, categoryLabels, categoryOrder, type MenuCategory, type MenuItem } from "@/lib/menu"
import { SiteNav } from "@/components/site-nav"
import { MenuDetail } from "@/components/menu-detail"

const presentCategories = categoryOrder.filter((category) => menuItems.some((item) => item.category === category))
const representativeImage = (category: MenuCategory) =>
  menuItems.find((item) => item.category === category)?.image ?? "/placeholder.svg"

export default function MenuPage() {
  const [selected, setSelected] = useState<MenuCategory | null>(null)
  const [detail, setDetail] = useState<MenuItem | null>(null)

  const visibleItems = selected ? menuItems.filter((item) => item.category === selected) : []

  return (
    <main className={styles.screen}>
      <SiteNav />
      <h1 className={styles.title}>{selected ? categoryLabels[selected] : "전체 메뉴"}</h1>

      {selected === null ? (
        <div className={styles.grid}>
          {presentCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={styles.card}
              onClick={() => setSelected(category)}
            >
              <img
                className={styles.thumb}
                src={representativeImage(category) || "/placeholder.svg"}
                alt={categoryLabels[category]}
              />
              <span className={styles.info}>
                <span className={styles.name}>{categoryLabels[category]}</span>
              </span>
            </button>
          ))}
        </div>
      ) : (
        <>
          <button type="button" className={styles.back} onClick={() => setSelected(null)}>
            ← 메뉴 종류
          </button>
          <div className={styles.grid}>
            {visibleItems.map((item) => (
              <button key={item.id} type="button" className={styles.card} onClick={() => setDetail(item)}>
                <img className={styles.thumb} src={item.image || "/placeholder.svg"} alt={item.name} />
                <span className={styles.info}>
                  <span className={styles.tagline}>{item.tagline}</span>
                  <span className={styles.name}>{item.name}</span>
                </span>
              </button>
            ))}
          </div>
        </>
      )}

      {detail && <MenuDetail item={detail} onClose={() => setDetail(null)} />}
    </main>
  )
}
