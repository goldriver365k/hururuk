"use client"

import { useState } from "react"
import { categoryOrder, categoryLabels, menuItems, type MenuCategory } from "@/lib/menu"

type RegionKey = "univ" | "resid" | "office"
type SizeKey = "small" | "medium" | "large"

const OPTIONS: { key: RegionKey; mark: string; name: string; desc: string }[] = [
  {
    key: "univ",
    mark: "Area 01",
    name: "대학가",
    desc: "빠르고 가성비 좋은 메뉴를 중심으로 구성합니다.",
  },
  {
    key: "resid",
    mark: "Area 02",
    name: "주거 상권",
    desc: "가족이 함께 선택할 수 있는 메뉴를 중심으로 구성합니다.",
  },
  {
    key: "office",
    mark: "Area 03",
    name: "오피스 상권",
    desc: "회전율이 높은 메뉴를 중심으로 구성합니다.",
  },
]

const SIZES: { key: SizeKey; mark: string; name: string; area: string; desc: string; floorplan: string }[] = [
  {
    key: "small",
    mark: "Size 01",
    name: "소형 매장",
    area: "10평",
    desc: "적은 인원으로 운영하는 컴팩트한 매장입니다.",
    floorplan: "/franchise/floorplan-small.png",
  },
  {
    key: "medium",
    mark: "Size 02",
    name: "중형 매장",
    area: "15평",
    desc: "가장 균형 잡힌 표준형 매장입니다.",
    floorplan: "/franchise/floorplan-medium.png",
  },
  {
    key: "large",
    mark: "Size 03",
    name: "대형 매장",
    area: "20평",
    desc: "넉넉한 좌석과 다양한 메뉴를 담는 매장입니다.",
    floorplan: "/franchise/floorplan-large.png",
  },
]

const CATEGORY_THUMBS: { key: MenuCategory; name: string; image: string }[] = categoryOrder.map((key) => ({
  key,
  name: categoryLabels[key],
  image: menuItems.find((m) => m.category === key)?.image ?? "",
}))

export function RegionSelect() {
  const [step, setStep] = useState<"region" | "size" | "menu" | "result">("region")
  const [region, setRegion] = useState<RegionKey | null>(null)
  const [size, setSize] = useState<SizeKey | null>(null)
  const [menus, setMenus] = useState<MenuCategory[]>([])

  const activeRegion = OPTIONS.find((o) => o.key === region)
  const activeSize = SIZES.find((o) => o.key === size)

  const selectRegion = (key: RegionKey) => {
    setRegion(key)
    try {
      sessionStorage.setItem("fr_region", key)
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  }

  const selectSize = (key: SizeKey) => {
    setSize(key)
    try {
      sessionStorage.setItem("fr_size", key)
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  }

  const toggleMenu = (key: MenuCategory) => {
    setMenus((prev) => {
      const next = prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
      try {
        sessionStorage.setItem("fr_menus", JSON.stringify(next))
      } catch {
        // ignore storage errors (private mode, etc.)
      }
      return next
    })
  }

  return (
    <section className="fr-region" id="start">
      <div className="fr-wrap">
        {step === "region" ? (
          <>
            <div className="head">
              <span className="eyebrow">Location</span>
              <h2 className="text-balance">어디에서 시작하시나요?</h2>
              <p className="lead text-pretty">
                매장이 메뉴에 맞추는 것이 아니라, <b>메뉴가 상권에 맞춰 변합니다.</b>
              </p>
            </div>

            <div className="fr-opts">
              {OPTIONS.map((o) => (
                <button
                  key={o.key}
                  type="button"
                  className="fr-opt"
                  aria-pressed={region === o.key}
                  onClick={() => selectRegion(o.key)}
                >
                  <div className="mark">{o.mark}</div>
                  <div className="name">{o.name}</div>
                </button>
              ))}
            </div>

            {activeRegion && (
              <div className="fr-desc" role="status" aria-live="polite">
                <div className="t">{activeRegion.name}</div>
                <div className="d">{activeRegion.desc}</div>
              </div>
            )}

            <button
              type="button"
              className="fr-next"
              disabled={!region}
              onClick={() => setStep("size")}
            >
              다음
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </button>
          </>
        ) : step === "size" ? (
          <>
            <div className="head">
              <span className="eyebrow">Store Size</span>
              <h2 className="text-balance">어떤 크기로 시작할까요?</h2>
              <p className="lead text-pretty">
                운영 규모에 맞춰 <b>매장 크기를 선택하세요.</b>
              </p>
            </div>

            <div className="fr-opts">
              {SIZES.map((o) => (
                <button
                  key={o.key}
                  type="button"
                  className="fr-opt"
                  aria-pressed={size === o.key}
                  onClick={() => selectSize(o.key)}
                >
                  <div className="mark">{o.mark}</div>
                  <div className="name">{o.name}</div>
                  <div className="area">{o.area}</div>
                </button>
              ))}
            </div>

            {activeSize && (
              <div className="fr-desc" role="status" aria-live="polite">
                <div className="t">
                  {activeSize.name} <span className="area">{activeSize.area}</span>
                </div>
                <div className="d">{activeSize.desc}</div>
              </div>
            )}

            <div className="fr-btnrow">
              <button type="button" className="fr-back" onClick={() => setStep("region")}>
                <span className="arrow" aria-hidden="true">
                  ←
                </span>
                이전
              </button>
              <button type="button" className="fr-next" disabled={!size} onClick={() => setStep("menu")}>
                다음
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </>
        ) : step === "menu" ? (
          <>
            <div className="head">
              <span className="eyebrow">Menu</span>
              <h2 className="text-balance">내 매장에는 무엇을 담을까요?</h2>
              <p className="lead text-pretty">
                상권과 규모에 맞춰 <b>담고 싶은 메뉴를 골라보세요.</b> 여러 개 선택할 수 있습니다.
              </p>
            </div>

            <div className="fr-mine" aria-label="이전 단계에서 선택한 값">
              <span className="lbl">나의 선택</span>
              <span className="val">{activeRegion?.name ?? "-"}</span>
              <span className="sep" aria-hidden="true">/</span>
              <span className="val">{activeSize?.name ?? "-"}</span>
            </div>

            <div className="fr-menus">
              {CATEGORY_THUMBS.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  className="fr-menu"
                  aria-pressed={menus.includes(c.key)}
                  onClick={() => toggleMenu(c.key)}
                >
                  <span className="thumb">
                    {c.image ? <img src={c.image || "/placeholder.svg"} alt="" loading="lazy" /> : null}
                    <span className="check" aria-hidden="true">✓</span>
                  </span>
                  <span className="name">{c.name}</span>
                </button>
              ))}
            </div>

            <div className="fr-btnrow">
              <button type="button" className="fr-back" onClick={() => setStep("size")}>
                <span className="arrow" aria-hidden="true">
                  ←
                </span>
                이전
              </button>
              <button
                type="button"
                className="fr-next"
                disabled={menus.length === 0}
                onClick={() => setStep("result")}
              >
                내 매장 보기
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="head">
              <span className="eyebrow">My Hururuk Chapchap</span>
              <h2 className="text-balance">나의 후루룩찹찹</h2>
              <p className="lead text-pretty">상권에 맞는 나만의 후루룩찹찹이 완성되었습니다.</p>
            </div>

            <div className="fr-store">
              <div className="fr-store-top">
                <span className="lbl">내가 선택한 매장</span>
                <div className="fr-store-name">
                  <span className="val">{activeRegion?.name ?? "-"}</span>
                  <span className="sep" aria-hidden="true">·</span>
                  <span className="val">
                    {activeSize?.name ?? "-"}
                    {activeSize ? ` (${activeSize.area})` : ""}
                  </span>
                </div>
              </div>
              <div className="fr-store-tags">
                {CATEGORY_THUMBS.filter((c) => menus.includes(c.key)).map((c) => (
                  <span key={c.key} className="fr-store-tag">
                    {c.name}
                  </span>
                ))}
              </div>
            </div>

            {activeSize && (
              <div className="fr-floorplan">
                <span className="lbl">
                  {activeSize.name} {activeSize.area} 도면
                </span>
                <img src={activeSize.floorplan || "/placeholder.svg"} alt={`${activeSize.name} ${activeSize.area} 도면`} />
              </div>
            )}

            <div className="fr-menus fr-menus--result">
              {CATEGORY_THUMBS.filter((c) => menus.includes(c.key)).map((c) => (
                <div key={c.key} className="fr-menu fr-menu--static">
                  <span className="thumb">
                    {c.image ? <img src={c.image || "/placeholder.svg"} alt="" loading="lazy" /> : null}
                  </span>
                  <span className="name">{c.name}</span>
                </div>
              ))}
            </div>

            <div className="fr-recap" role="status" aria-live="polite">
              <span className="fr-recap-item">{activeRegion?.name ?? "-"}</span>
              <span className="fr-recap-item">{activeSize?.name ?? "-"}</span>
              <span className="fr-recap-item">{menus.length}개 메뉴 카테고리</span>
            </div>

            <div className="fr-btnrow">
              <button type="button" className="fr-back" onClick={() => setStep("region")}>
                <span className="arrow" aria-hidden="true">
                  ←
                </span>
                다시 구성하기
              </button>
              <a href="#consult" className="fr-next">
                파트너 상담하기
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
