"use client"

import { useState } from "react"

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

const SIZES: { key: SizeKey; mark: string; name: string; desc: string }[] = [
  {
    key: "small",
    mark: "Size 01",
    name: "소형 매장",
    desc: "적은 인원으로 운영하는 컴팩트한 매장입니다.",
  },
  {
    key: "medium",
    mark: "Size 02",
    name: "중형 매장",
    desc: "가장 균형 잡힌 표준형 매장입니다.",
  },
  {
    key: "large",
    mark: "Size 03",
    name: "대형 매장",
    desc: "넉넉한 좌석과 다양한 메뉴를 담는 매장입니다.",
  },
]

export function RegionSelect() {
  const [step, setStep] = useState<"region" | "size">("region")
  const [region, setRegion] = useState<RegionKey | null>(null)
  const [size, setSize] = useState<SizeKey | null>(null)

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
        ) : (
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
                </button>
              ))}
            </div>

            {activeSize && (
              <div className="fr-desc" role="status" aria-live="polite">
                <div className="t">{activeSize.name}</div>
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
              <button type="button" className="fr-next" disabled={!size}>
                다음
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
