"use client"

import styles from "./menu.module.css"
import { menuByCategory } from "@/lib/menu"

export default function MenuPage() {
  return (
    <main className={styles.screen}>
      <h1 className={styles.title}>전체 메뉴</h1>

      <div className={styles.container}>
        {menuByCategory.map(({ category, items }) => (
          <section className={styles.group} key={category}>
            <div className={styles.categoryHead}>
              <h2 className={styles.categoryName}>{category}</h2>
              <span className={styles.rule} aria-hidden="true" />
            </div>

            <div className={styles.grid}>
              {items.map((item) => (
                <button key={item.id} type="button" className={styles.card}>
                  <img className={styles.thumb} src={item.image || "/placeholder.svg"} alt={item.name} />
                  <span className={styles.name}>{item.name}</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
