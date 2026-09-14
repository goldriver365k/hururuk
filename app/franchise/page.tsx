import type { Metadata } from "next"

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
    </div>
  )
}
