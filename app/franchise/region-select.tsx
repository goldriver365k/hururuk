"use client"

import { useState } from "react"

type RegionKey = "univ" | "resid" | "office"

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

export function RegionSelect() {
  const [selected, setSelected] = useState<RegionKey | null>(null)
  const active = OPTIONS.find((o) => o.key === selected)

  const handleSelect = (key: RegionKey) => {
    setSelected(key)
    try {
      sessionStorage.setItem("fr_region", key)
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  }

  return (
    <section className="fr-region" id="start">
      <div className="fr-wrap">
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
              aria-pressed={selected === o.key}
              onClick={() => handleSelect(o.key)}
            >
              <div className="mark">{o.mark}</div>
              <div className="name">{o.name}</div>
            </button>
          ))}
        </div>

        {active && (
          <div className="fr-desc" role="status" aria-live="polite">
            <div className="t">{active.name}</div>
            <div className="d">{active.desc}</div>
          </div>
        )}

        <button type="button" className="fr-next" disabled={!selected}>
          다음
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </section>
  )
}
