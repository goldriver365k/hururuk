import Link from "next/link"
import { menuItems } from "@/lib/menu"
import { SiteNav } from "@/components/site-nav"
import styles from "./couple.module.css"

const coupleIds = ["ragu-spaghetti", "fukuoka-ramen"]

const coupleMenus = coupleIds.map((id) => menuItems.find((item) => item.id === id)!).filter(Boolean)

export default function CouplePage() {
  return (
    <main className={styles.screen}>
      <SiteNav />
      <h1 className={styles.title}>함께라서 더 맛있다</h1>

      <img className={styles.character} src="/assets/first/char-couple.png" alt="연인" />

      <div className={styles.grid}>
        {coupleMenus.map((item) => (
          <div key={item.id} className={styles.card}>
            <img className={styles.thumb} src={item.image || "/placeholder.svg"} alt={item.name} />
            <div className={styles.info}>
              <span className={styles.tagline}>{item.tagline}</span>
              <span className={styles.name}>{item.name}</span>
            </div>
          </div>
        ))}
      </div>

      <Link href="/menu" className={styles.moreButton}>
        다른 선택 보기
      </Link>
    </main>
  )
}
