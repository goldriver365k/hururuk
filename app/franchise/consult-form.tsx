"use client"

import { useEffect, useState, type FormEvent } from "react"
import { categoryLabels, type MenuCategory } from "@/lib/menu"

const REGION_LABEL: Record<string, string> = {
  univ: "대학가",
  resid: "주거 상권",
  office: "오피스 상권",
}

const SIZE_LABEL: Record<string, string> = {
  small: "소형 매장",
  medium: "중형 매장",
  large: "대형 매장",
}

type HasStore = "yes" | "no"

export function ConsultForm() {
  const [prevRegion, setPrevRegion] = useState<string | null>(null)
  const [prevSize, setPrevSize] = useState<string | null>(null)
  const [prevMenus, setPrevMenus] = useState<MenuCategory[]>([])

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [wantRegion, setWantRegion] = useState("")
  const [hasStore, setHasStore] = useState<HasStore | null>(null)
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    try {
      setPrevRegion(sessionStorage.getItem("fr_region"))
      setPrevSize(sessionStorage.getItem("fr_size"))
      const raw = sessionStorage.getItem("fr_menus")
      if (raw) setPrevMenus(JSON.parse(raw))
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  }, [])

  const hasPrevSelection = Boolean(prevRegion || prevSize || prevMenus.length > 0)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nextErrors: Record<string, string> = {}
    if (!name.trim()) nextErrors.name = "이름을 입력해주세요."
    if (!phone.trim()) nextErrors.phone = "연락처를 입력해주세요."
    else if (!/^[0-9-+\s]{8,}$/.test(phone.trim())) nextErrors.phone = "연락처 형식을 확인해주세요."
    if (!wantRegion.trim()) nextErrors.wantRegion = "희망 지역을 입력해주세요."
    if (!hasStore) nextErrors.hasStore = "현재 점포 보유 여부를 선택해주세요."

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="fr-consult" id="consult">
        <div className="fr-wrap">
          <div className="fr-consult-done">
            <span className="eyebrow">Partner Inquiry</span>
            <h2 className="text-balance">상담 신청이 접수되었습니다</h2>
            <p className="lead text-pretty">확인 후 연락드리겠습니다.</p>
            <a href="/" className="fr-next">
              홈으로
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="fr-consult" id="consult">
      <div className="fr-wrap">
        <div className="head">
          <span className="eyebrow">Partner Inquiry</span>
          <h2 className="text-balance">후루룩찹찹과 함께 시작하세요</h2>
          <p className="lead text-pretty">
            복잡한 절차보다 <b>먼저 편하게 이야기해보세요.</b>
          </p>
        </div>

        <div className="fr-consult-grid">
          <aside className="fr-consult-summary">
            <span className="lbl">내가 구성한 매장</span>
            {hasPrevSelection ? (
              <dl>
                <div className="row">
                  <dt>선택한 상권</dt>
                  <dd>{prevRegion ? REGION_LABEL[prevRegion] ?? prevRegion : "-"}</dd>
                </div>
                <div className="row">
                  <dt>매장 규모</dt>
                  <dd>{prevSize ? SIZE_LABEL[prevSize] ?? prevSize : "-"}</dd>
                </div>
                <div className="row">
                  <dt>선택 메뉴</dt>
                  <dd>
                    {prevMenus.length > 0
                      ? prevMenus.map((m) => categoryLabels[m]).join(" · ")
                      : "-"}
                  </dd>
                </div>
              </dl>
            ) : (
              <p className="empty text-pretty">
                위에서 상권과 메뉴를 먼저 구성하면 상담 내용에 함께 담아드립니다.
              </p>
            )}
          </aside>

          <form className="fr-form" onSubmit={handleSubmit} noValidate>
            <div className="fr-field">
              <label htmlFor="c-name">이름</label>
              <input
                id="c-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력해주세요"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <span className="fr-error">{errors.name}</span>}
            </div>

            <div className="fr-field">
              <label htmlFor="c-phone">연락처</label>
              <input
                id="c-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010-0000-0000"
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone && <span className="fr-error">{errors.phone}</span>}
            </div>

            <div className="fr-field">
              <label htmlFor="c-region">희망 지역</label>
              <input
                id="c-region"
                type="text"
                value={wantRegion}
                onChange={(e) => setWantRegion(e.target.value)}
                placeholder="예) 서울 강남구"
                aria-invalid={Boolean(errors.wantRegion)}
              />
              {errors.wantRegion && <span className="fr-error">{errors.wantRegion}</span>}
            </div>

            <div className="fr-field">
              <span className="fr-field-label">현재 점포 보유 여부</span>
              <div className="fr-radio-group" role="radiogroup" aria-label="현재 점포 보유 여부">
                <button
                  type="button"
                  className="fr-radio"
                  aria-pressed={hasStore === "yes"}
                  onClick={() => setHasStore("yes")}
                >
                  있음
                </button>
                <button
                  type="button"
                  className="fr-radio"
                  aria-pressed={hasStore === "no"}
                  onClick={() => setHasStore("no")}
                >
                  없음
                </button>
              </div>
              {errors.hasStore && <span className="fr-error">{errors.hasStore}</span>}
            </div>

            <div className="fr-field">
              <label htmlFor="c-message">
                문의 내용 <span className="fr-optional">(선택)</span>
              </label>
              <textarea
                id="c-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="궁금한 점을 자유롭게 남겨주세요"
                rows={4}
              />
            </div>

            <div className="fr-btnrow">
              <a href="#start" className="fr-back">
                <span className="arrow" aria-hidden="true">
                  ←
                </span>
                이전으로
              </a>
              <button type="submit" className="fr-next">
                상담 신청하기
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
