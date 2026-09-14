import Link from "next/link"
import { menuItems } from "@/lib/menu"
import styles from "./solo.module.css"

const soloIds = ["hwasan-bulbaek", "malatang"]

const soloMenus = soloIds.map((id) => menuItems.find((item) => item.id === id)!).filter(Boolean)

export default function SoloPage() {
  return (
    <main className={styles.screen}>
      <h1 className={styles.title}>혼자 먹어도 즐겁다</h1>

      <div className={styles.grid}>
        {soloMenus.map((item) => (
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
