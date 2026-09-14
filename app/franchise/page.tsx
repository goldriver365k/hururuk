import type { Metadata } from "next"
import { RegionSelect } from "./region-select"

export const metadata: Metadata = {
  title: "후루룩찹찹 파트너 | 사업 제안",
  description:
    "매장이 메뉴에 맞추는 것이 아니라, 메뉴가 상권에 맞춰 변합니다. 후루룩찹찹 파트너 사업 안내.",
}

export default function FranchisePage() {
  return (
    <div className="fr-root">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .fr-root{
            --fr-ivory:#F3EFE8;
            --fr-paper:#FBFAF7;
            --fr-warm:#8C8578;
            --fr-warm-soft:#B7AF9F;
            --fr-line:#E1DBD0;
            --fr-charcoal:#26241F;
            --fr-charcoal-soft:#4A463F;
            --fr-gold:#B08A3E;
            min-height:100vh;
            background:var(--fr-ivory);
            color:var(--fr-charcoal);
            font-family:'Pretendard','Noto Sans KR',system-ui,sans-serif;
            line-height:1.7;
            -webkit-font-smoothing:antialiased;
          }
          .fr-root *{box-sizing:border-box;margin:0;padding:0;}
          .fr-wrap{max-width:1120px;margin:0 auto;padding:0 40px;}

          .fr-header{
            border-bottom:1px solid var(--fr-line);
            background:rgba(243,239,232,.85);
            backdrop-filter:blur(8px);
          }
          .fr-nav{
            display:flex;align-items:center;justify-content:space-between;
            padding:22px 0;
          }
          .fr-logo{
            font-size:16px;font-weight:700;letter-spacing:-0.01em;
            color:var(--fr-charcoal);
          }
          .fr-logo span{color:var(--fr-gold);}
          .fr-tag{
            font-size:12px;font-weight:600;letter-spacing:0.22em;
            text-transform:uppercase;color:var(--fr-warm);
          }

          .fr-hero{
            min-height:calc(100vh - 67px);
            display:flex;flex-direction:column;justify-content:center;
            padding:80px 0 96px;
          }
          .fr-kicker{
            display:inline-flex;align-items:center;gap:12px;
            font-size:12.5px;font-weight:600;letter-spacing:0.2em;
            text-transform:uppercase;color:var(--fr-gold);
            margin-bottom:36px;
          }
          .fr-kicker::before{content:"";width:32px;height:1px;background:var(--fr-gold);}
          .fr-hero h1{
            font-size:60px;line-height:1.18;font-weight:700;
            letter-spacing:-0.02em;
            max-width:820px;margin-bottom:40px;
          }
          .fr-hero .lead{
            font-size:20px;line-height:1.75;font-weight:400;
            color:var(--fr-charcoal-soft);
            max-width:560px;margin-bottom:52px;
          }
          .fr-hero .lead b{font-weight:600;color:var(--fr-charcoal);}
          .fr-cta{
            display:inline-flex;align-items:center;gap:12px;
            align-self:flex-start;
            background:var(--fr-charcoal);color:var(--fr-ivory);
            font-size:15px;font-weight:600;
            padding:18px 36px;border-radius:2px;
            border:1px solid var(--fr-charcoal);
            transition:background .2s ease,transform .2s ease;
          }
          .fr-cta:hover{background:#000;transform:translateY(-1px);}
          .fr-cta .arrow{
            display:inline-block;transition:transform .2s ease;
          }
          .fr-cta:hover .arrow{transform:translateX(4px);}

          .fr-meta{
            display:flex;gap:56px;margin-top:80px;
            padding-top:36px;border-top:1px solid var(--fr-line);
          }
          .fr-meta .item .k{
            font-size:12px;font-weight:600;letter-spacing:0.14em;
            text-transform:uppercase;color:var(--fr-warm);margin-bottom:8px;
          }
          .fr-meta .item .v{
            font-size:15px;font-weight:500;color:var(--fr-charcoal-soft);
          }

          .fr-model{
            border-top:1px solid var(--fr-line);
            padding:120px 0;
          }
          .fr-model .head{
            max-width:720px;margin-bottom:72px;
          }
          .fr-model .eyebrow{
            display:inline-flex;align-items:center;gap:12px;
            font-size:12.5px;font-weight:600;letter-spacing:0.2em;
            text-transform:uppercase;color:var(--fr-gold);
            margin-bottom:28px;
          }
          .fr-model .eyebrow::before{content:"";width:32px;height:1px;background:var(--fr-gold);}
          .fr-model h2{
            font-size:44px;line-height:1.25;font-weight:700;
            letter-spacing:-0.02em;
          }
          .fr-grid{
            display:grid;grid-template-columns:repeat(3,1fr);
            gap:28px;
          }
          .fr-card{
            background:var(--fr-paper);
            border:1px solid var(--fr-line);
            border-radius:3px;
            padding:44px 36px;
            display:flex;flex-direction:column;
          }
          .fr-card .num{
            font-size:12px;font-weight:600;letter-spacing:0.14em;
            color:var(--fr-warm-soft);margin-bottom:28px;
          }
          .fr-card h3{
            font-size:23px;font-weight:700;letter-spacing:-0.01em;
            line-height:1.35;margin-bottom:16px;
          }
          .fr-card p{
            font-size:15.5px;line-height:1.7;font-weight:400;
            color:var(--fr-charcoal-soft);
          }

          .fr-region{
            border-top:1px solid var(--fr-line);
            padding:120px 0;
          }
          .fr-region .head{max-width:720px;margin-bottom:64px;}
          .fr-region .eyebrow{
            display:inline-flex;align-items:center;gap:12px;
            font-size:12.5px;font-weight:600;letter-spacing:0.2em;
            text-transform:uppercase;color:var(--fr-gold);
            margin-bottom:28px;
          }
          .fr-region .eyebrow::before{content:"";width:32px;height:1px;background:var(--fr-gold);}
          .fr-region h2{
            font-size:44px;line-height:1.25;font-weight:700;
            letter-spacing:-0.02em;margin-bottom:28px;
          }
          .fr-region .lead{
            font-size:18px;line-height:1.75;font-weight:400;
            color:var(--fr-charcoal-soft);max-width:560px;
          }
          .fr-region .lead b{font-weight:600;color:var(--fr-charcoal);}
          .fr-opts{
            display:grid;grid-template-columns:repeat(3,1fr);
            gap:20px;margin-bottom:36px;
          }
          .fr-opt{
            position:relative;
            background:var(--fr-paper);
            border:1px solid var(--fr-line);
            border-radius:3px;
            padding:40px 32px;
            text-align:left;cursor:pointer;
            transition:border-color .2s ease,background .2s ease,transform .2s ease;
            font-family:inherit;color:inherit;
          }
          .fr-opt:hover{transform:translateY(-2px);border-color:var(--fr-warm-soft);}
          .fr-opt .mark{
            font-size:12px;font-weight:600;letter-spacing:0.14em;
            color:var(--fr-warm-soft);margin-bottom:22px;
            text-transform:uppercase;transition:color .2s ease;
          }
          .fr-opt .name{
            font-size:22px;font-weight:700;letter-spacing:-0.01em;
            color:var(--fr-charcoal);
          }
          .fr-opt[aria-pressed="true"]{
            background:var(--fr-charcoal);
            border-color:var(--fr-charcoal);
          }
          .fr-opt[aria-pressed="true"] .mark{color:var(--fr-gold);}
          .fr-opt[aria-pressed="true"] .name{color:var(--fr-ivory);}
          .fr-desc{
            min-height:0;
            border-left:2px solid var(--fr-gold);
            padding:18px 24px;margin-bottom:44px;
            background:var(--fr-paper);
            border-radius:0 3px 3px 0;
          }
          .fr-desc .t{
            font-size:15px;font-weight:700;color:var(--fr-charcoal);
            margin-bottom:6px;letter-spacing:-0.01em;
          }
          .fr-desc .d{
            font-size:15px;line-height:1.7;color:var(--fr-charcoal-soft);
          }
          .fr-next{
            display:inline-flex;align-items:center;gap:12px;
            background:var(--fr-charcoal);color:var(--fr-ivory);
            font-size:15px;font-weight:600;font-family:inherit;
            padding:18px 44px;border-radius:2px;
            border:1px solid var(--fr-charcoal);cursor:pointer;
            transition:background .2s ease,transform .2s ease,opacity .2s ease;
          }
          .fr-next:hover:not(:disabled){background:#000;transform:translateY(-1px);}
          .fr-next:disabled{opacity:.4;cursor:not-allowed;}
          .fr-next .arrow{display:inline-block;transition:transform .2s ease;}
          .fr-next:hover:not(:disabled) .arrow{transform:translateX(4px);}
          .fr-btnrow{display:flex;align-items:center;gap:14px;flex-wrap:wrap;}
          .fr-back{
            display:inline-flex;align-items:center;gap:12px;
            background:transparent;color:var(--fr-charcoal);
            font-size:15px;font-weight:600;font-family:inherit;
            padding:18px 40px;border-radius:2px;
            border:1px solid var(--fr-warm-soft);cursor:pointer;
            transition:border-color .2s ease,transform .2s ease;
          }
          .fr-back:hover{border-color:var(--fr-charcoal);transform:translateY(-1px);}
          .fr-back .arrow{display:inline-block;transition:transform .2s ease;}
          .fr-back:hover .arrow{transform:translateX(-4px);}
          .fr-mine{
            display:inline-flex;align-items:center;gap:12px;flex-wrap:wrap;
            padding:12px 20px;margin-bottom:36px;
            background:var(--fr-paper);border:1px solid var(--fr-warm-soft);
            border-radius:2px;
          }
          .fr-mine .lbl{
            font-size:12px;font-weight:700;letter-spacing:0.08em;
            text-transform:uppercase;color:var(--fr-gold);
          }
          .fr-mine .val{font-size:14px;font-weight:600;color:var(--fr-charcoal);}
          .fr-mine .sep{color:var(--fr-warm-soft);}
          .fr-menus{
            display:grid;grid-template-columns:repeat(3,1fr);gap:16px;
            margin-bottom:44px;
          }
          .fr-menu{
            display:flex;align-items:center;gap:16px;text-align:left;
            padding:16px;border-radius:3px;cursor:pointer;font-family:inherit;
            background:var(--fr-paper);border:1px solid var(--fr-warm-soft);
            transition:border-color .2s ease,transform .2s ease;
          }
          .fr-menu:hover{transform:translateY(-2px);border-color:var(--fr-warm-soft);}
          .fr-menu .thumb{
            position:relative;flex:0 0 auto;width:56px;height:56px;
            border-radius:3px;overflow:hidden;background:var(--fr-ivory);
          }
          .fr-menu .thumb img{width:100%;height:100%;object-fit:cover;display:block;}
          .fr-menu .thumb .check{
            position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
            background:rgba(20,20,20,0.55);color:var(--fr-gold);
            font-size:22px;font-weight:700;opacity:0;transition:opacity .2s ease;
          }
          .fr-menu .name{font-size:16px;font-weight:600;color:var(--fr-charcoal);letter-spacing:-0.01em;}
          .fr-menu[aria-pressed="true"]{
            border-color:var(--fr-charcoal);background:var(--fr-charcoal);
          }
          .fr-menu[aria-pressed="true"] .name{color:var(--fr-ivory);}
          .fr-menu[aria-pressed="true"] .thumb .check{opacity:1;}

          @media(max-width:820px){
            .fr-wrap{padding:0 24px;}
            .fr-hero h1{font-size:36px;}
            .fr-hero .lead{font-size:17px;}
            .fr-tag{display:none;}
            .fr-meta{flex-direction:column;gap:24px;}
            .fr-model{padding:80px 0;}
            .fr-model h2{font-size:30px;}
            .fr-model .head{margin-bottom:48px;}
            .fr-grid{grid-template-columns:1fr;gap:16px;}
            .fr-card{padding:36px 28px;}
            .fr-region{padding:80px 0;}
            .fr-region h2{font-size:30px;}
            .fr-region .head{margin-bottom:44px;}
            .fr-opts{grid-template-columns:1fr;gap:14px;}
            .fr-opt{padding:32px 28px;}
            .fr-next{width:100%;justify-content:center;}
            .fr-menus{grid-template-columns:1fr;gap:12px;}
            .fr-btnrow .fr-next,.fr-btnrow .fr-back{flex:1;justify-content:center;}
          }
        `,
        }}
      />

      <header className="fr-header">
        <div className="fr-wrap">
          <div className="fr-nav">
            <div className="fr-logo">
              후루룩찹찹 <span>파트너</span>
            </div>
            <div className="fr-tag">Business Partnership</div>
          </div>
        </div>
      </header>

      <main className="fr-hero">
        <div className="fr-wrap">
          <span className="fr-kicker">Partner Program</span>
          <h1 className="text-balance">후루룩찹찹 파트너가 되세요</h1>
          <p className="lead text-pretty">
            매장이 메뉴에 맞추는 것이 아니라, <b>메뉴가 상권에 맞춰 변합니다.</b>
          </p>
          <a href="#start" className="fr-cta">
            내 매장 만들어보기
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>

          <div className="fr-meta">
            <div className="item">
              <div className="k">Concept</div>
              <div className="v">상권 맞춤형 한 그릇 전문점</div>
            </div>
            <div className="item">
              <div className="k">Model</div>
              <div className="v">유연한 메뉴 구성 · 낮은 초기 비용</div>
            </div>
            <div className="item">
              <div className="k">Support</div>
              <div className="v">브랜드 · 운영 · 상권 분석 지원</div>
            </div>
          </div>
        </div>
      </main>

      <section className="fr-model">
        <div className="fr-wrap">
          <div className="head">
            <span className="eyebrow">Business Model</span>
            <h2 className="text-balance">하나의 매장, 여러 개의 전문점</h2>
          </div>
          <div className="fr-grid">
            <article className="fr-card">
              <div className="num">01</div>
              <h3>푸드코트의 선택권</h3>
              <p className="text-pretty">여러 종류의 음식을 한 공간에서 선택</p>
            </article>
            <article className="fr-card">
              <div className="num">02</div>
              <h3>전문점의 맛</h3>
              <p className="text-pretty">각 카테고리의 대표 메뉴에 집중</p>
            </article>
            <article className="fr-card">
              <div className="num">03</div>
              <h3>단일매장의 운영효율</h3>
              <p className="text-pretty">하나의 주방과 운영 시스템으로 구성</p>
            </article>
          </div>
        </div>
      </section>

      <RegionSelect />
    </div>
  )
}
