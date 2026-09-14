import Link from "next/link"
import { menuItems } from "@/lib/menu"
import { SiteNav } from "@/components/site-nav"
import styles from "./family.module.css"

const familyIds = ["donkatsu", "woosamgyeop-bomb-pho"]

const familyMenus = familyIds.map((id) => menuItems.find((item) => item.id === id)!).filter(Boolean)

export default function FamilyPage() {
  return (
    <main className={styles.screen}>
      <SiteNav />
      <h1 className={styles.title}>가족과 함께 더 맛있게</h1>

      <img className={styles.character} src="/assets/first/char-family.png" alt="가족" />

      <div className={styles.grid}>
        {familyMenus.map((item) => (
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
