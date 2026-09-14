import type { Metadata } from "next"
import { RegionSelect } from "./region-select"
import { ConsultForm } from "./consult-form"

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
            --fr-red:#B23A2E;
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
            margin:8px 0 32px;
          }
          .fr-kicker::before{content:"";width:32px;height:1px;background:var(--fr-gold);}
          .fr-kicker::after{content:"";flex:1;height:1px;background:var(--fr-line);}
          .fr-core{
            display:flex;flex-direction:column;gap:8px;
            max-width:820px;margin-bottom:28px;
          }
          .fr-core .line1{
            font-size:38px;line-height:1.28;font-weight:700;
            letter-spacing:-0.01em;color:var(--fr-charcoal);
          }
          .fr-core .line2{
            font-size:46px;line-height:1.24;font-weight:800;
            letter-spacing:-0.01em;color:var(--fr-red);
            display:inline-block;padding-bottom:12px;
            background-image:linear-gradient(var(--fr-gold),var(--fr-gold));
            background-repeat:no-repeat;background-size:100% 3px;background-position:0 100%;
          }
          .fr-hero-desc{
            font-size:18px;line-height:1.75;font-weight:400;
            color:var(--fr-charcoal-soft);
            max-width:560px;margin-bottom:8px;
          }
          .fr-hero-desc b{font-weight:700;color:var(--fr-charcoal);}
          .fr-sub{
            font-size:24px;line-height:1.5;font-weight:600;
            letter-spacing:-0.01em;color:var(--fr-charcoal-soft);
            max-width:640px;margin-bottom:40px;
          }
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
          .fr-opt .area{
            font-size:13px;font-weight:600;letter-spacing:0;
            color:var(--fr-warm-soft);margin-top:8px;
            transition:color .2s ease;
          }
          .fr-opt[aria-pressed="true"]{
            background:var(--fr-charcoal);
            border-color:var(--fr-charcoal);
          }
          .fr-opt[aria-pressed="true"] .mark{color:var(--fr-gold);}
          .fr-opt[aria-pressed="true"] .name{color:var(--fr-ivory);}
          .fr-opt[aria-pressed="true"] .area{color:var(--fr-warm);}
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
          .fr-desc .t .area{font-weight:600;color:var(--fr-gold);}
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
          .fr-menu--static{cursor:default;}
          .fr-menu--static:hover{transform:none;}
          .fr-store{
            padding:28px 32px;margin-bottom:36px;
            background:var(--fr-paper);border:1px solid var(--fr-warm-soft);
            border-radius:3px;
          }
          .fr-store-top{
            display:flex;align-items:baseline;justify-content:space-between;
            flex-wrap:wrap;gap:12px;padding-bottom:20px;
            border-bottom:1px solid var(--fr-warm-soft);
          }
          .fr-store .lbl{
            font-size:12px;font-weight:700;letter-spacing:0.08em;
            text-transform:uppercase;color:var(--fr-gold);
          }
          .fr-store-name{display:inline-flex;align-items:center;gap:10px;}
          .fr-store-name .val{font-size:20px;font-weight:700;color:var(--fr-charcoal);letter-spacing:-0.01em;}
          .fr-store-name .sep{color:var(--fr-warm-soft);}
          .fr-store-tags{
            display:flex;flex-wrap:wrap;gap:10px;padding-top:20px;
          }
          .fr-store-tag{
            font-size:13px;font-weight:600;color:var(--fr-warm);
            padding:6px 14px;border:1px solid var(--fr-warm-soft);
            border-radius:20px;
          }
          .fr-menus--result{margin-bottom:32px;}
          .fr-floorplan{
            margin-bottom:36px;padding:28px 32px;
            background:var(--fr-paper);border:1px solid var(--fr-warm-soft);
            border-radius:3px;
          }
          .fr-floorplan .lbl{
            display:block;font-size:12px;font-weight:700;letter-spacing:0.08em;
            text-transform:uppercase;color:var(--fr-gold);margin-bottom:16px;
          }
          .fr-floorplan img{
            display:block;width:100%;height:auto;border-radius:2px;
            background:var(--fr-ivory);
          }
          .fr-recap{
            display:flex;align-items:center;gap:16px;flex-wrap:wrap;
            margin-bottom:44px;
          }
          .fr-recap-item{
            font-size:14px;font-weight:600;color:var(--fr-warm);
            padding-right:16px;border-right:1px solid var(--fr-warm-soft);
          }
          .fr-recap-item:last-child{border-right:none;padding-right:0;}

          .fr-support{
            border-top:1px solid var(--fr-line);
            padding:120px 0;
          }
          .fr-support .head{max-width:720px;margin-bottom:80px;}
          .fr-support .eyebrow{
            display:inline-flex;align-items:center;gap:12px;
            font-size:12.5px;font-weight:600;letter-spacing:0.2em;
            text-transform:uppercase;color:var(--fr-gold);
            margin-bottom:28px;
          }
          .fr-support .eyebrow::before{content:"";width:32px;height:1px;background:var(--fr-gold);}
          .fr-support h2{
            font-size:44px;line-height:1.25;font-weight:700;
            letter-spacing:-0.02em;margin-bottom:28px;
          }
          .fr-support .lead{
            font-size:18px;line-height:1.75;font-weight:400;
            color:var(--fr-charcoal-soft);max-width:560px;
          }
          .fr-support .lead b{font-weight:600;color:var(--fr-charcoal);}
          .fr-flow{
            display:flex;align-items:stretch;margin-bottom:96px;
          }
          .fr-flow-item{
            flex:1;min-width:0;padding-right:32px;
            display:flex;flex-direction:column;
          }
          .fr-flow-num{
            font-size:52px;font-weight:700;line-height:1;
            letter-spacing:-0.02em;color:var(--fr-warm-soft);
            margin-bottom:26px;
          }
          .fr-flow-item h3{
            font-size:19px;font-weight:700;letter-spacing:-0.01em;
            line-height:1.4;margin-bottom:14px;
          }
          .fr-flow-item p{
            font-size:14.5px;line-height:1.75;font-weight:400;
            color:var(--fr-charcoal-soft);
          }
          .fr-flow-arrow{
            flex:0 0 auto;align-self:center;
            font-size:18px;color:var(--fr-warm-soft);
            padding:0 22px;
          }
          .fr-support-cta{
            border-top:1px solid var(--fr-line);padding-top:64px;
            display:flex;flex-direction:column;align-items:flex-start;gap:32px;
          }
          .fr-support-cta h3{
            font-size:32px;font-weight:700;letter-spacing:-0.02em;
          }

          .fr-consult{
            border-top:1px solid var(--fr-line);
            padding:120px 0;
          }
          .fr-consult .head{max-width:720px;margin-bottom:64px;}
          .fr-consult .eyebrow{
            display:inline-flex;align-items:center;gap:12px;
            font-size:12.5px;font-weight:600;letter-spacing:0.2em;
            text-transform:uppercase;color:var(--fr-gold);
            margin-bottom:28px;
          }
          .fr-consult .eyebrow::before{content:"";width:32px;height:1px;background:var(--fr-gold);}
          .fr-consult h2{
            font-size:44px;line-height:1.25;font-weight:700;
            letter-spacing:-0.02em;margin-bottom:28px;
          }
          .fr-consult .lead{
            font-size:18px;line-height:1.75;font-weight:400;
            color:var(--fr-charcoal-soft);max-width:560px;
          }
          .fr-consult .lead b{font-weight:600;color:var(--fr-charcoal);}
          .fr-consult-grid{
            display:grid;grid-template-columns:320px 1fr;gap:48px;
            align-items:start;
          }
          .fr-consult-summary{
            background:var(--fr-paper);border:1px solid var(--fr-line);
            border-radius:3px;padding:32px 28px;
          }
          .fr-consult-summary .lbl{
            display:block;font-size:12px;font-weight:700;letter-spacing:0.08em;
            text-transform:uppercase;color:var(--fr-gold);margin-bottom:22px;
          }
          .fr-consult-summary dl .row{
            padding:14px 0;border-top:1px solid var(--fr-line);
          }
          .fr-consult-summary dl .row:first-child{border-top:none;padding-top:0;}
          .fr-consult-summary dt{
            font-size:12px;font-weight:600;letter-spacing:0.06em;
            color:var(--fr-warm);margin-bottom:6px;
          }
          .fr-consult-summary dd{
            font-size:15.5px;font-weight:600;color:var(--fr-charcoal);
            letter-spacing:-0.01em;line-height:1.5;
          }
          .fr-consult-summary .empty{
            font-size:14.5px;line-height:1.7;color:var(--fr-charcoal-soft);
          }
          .fr-form{display:flex;flex-direction:column;gap:24px;}
          .fr-field{display:flex;flex-direction:column;gap:10px;}
          .fr-field label,.fr-field-label{
            font-size:14px;font-weight:600;color:var(--fr-charcoal);letter-spacing:-0.01em;
          }
          .fr-optional{font-weight:400;color:var(--fr-warm);}
          .fr-field input,.fr-field textarea{
            width:100%;font-family:inherit;font-size:15.5px;color:var(--fr-charcoal);
            background:var(--fr-paper);border:1px solid var(--fr-line);
            border-radius:3px;padding:16px 18px;transition:border-color .2s ease;
            resize:vertical;
          }
          .fr-field input:focus,.fr-field textarea:focus{
            outline:none;border-color:var(--fr-gold);
          }
          .fr-field input[aria-invalid="true"]{border-color:#B3452F;}
          .fr-error{font-size:13px;font-weight:500;color:#B3452F;}
          .fr-radio-group{display:flex;gap:12px;}
          .fr-radio{
            flex:1;background:var(--fr-paper);border:1px solid var(--fr-line);
            border-radius:3px;padding:14px 0;font-family:inherit;
            font-size:15px;font-weight:600;color:var(--fr-charcoal-soft);
            cursor:pointer;transition:border-color .2s ease,background .2s ease,color .2s ease;
          }
          .fr-radio:hover{border-color:var(--fr-warm-soft);}
          .fr-radio[aria-pressed="true"]{
            background:var(--fr-charcoal);border-color:var(--fr-charcoal);color:var(--fr-ivory);
          }
          .fr-consult-done{
            padding:96px 0;display:flex;flex-direction:column;align-items:flex-start;gap:28px;
          }
          .fr-consult-done h2{margin-bottom:0;}
          .fr-consult-done .lead{margin-bottom:8px;}
          .fr-contact{
            display:flex;gap:32px;margin-top:56px;padding-top:32px;border-top:1px solid var(--fr-line);
          }
          .fr-contact-item{
            display:flex;flex-direction:column;gap:4px;text-decoration:none;
          }
          .fr-contact-label{font-size:12px;font-weight:600;letter-spacing:.06em;color:var(--fr-warm);}
          .fr-contact-value{font-size:16px;font-weight:600;color:var(--fr-charcoal);}
          .fr-contact-item:hover .fr-contact-value{color:var(--fr-gold);}

          @media(max-width:820px){
            .fr-wrap{padding:0 24px;}
            .fr-core .line1{font-size:26px;}
            .fr-core .line2{font-size:30px;}
            .fr-hero-desc{font-size:16px;}
            .fr-sub{font-size:20px;}
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
            .fr-support{padding:80px 0;}
            .fr-support h2{font-size:30px;}
            .fr-support .head{margin-bottom:48px;}
            .fr-flow{flex-direction:column;gap:40px;margin-bottom:64px;}
            .fr-flow-item{padding-right:0;padding-top:32px;border-top:1px solid var(--fr-line);}
            .fr-flow-item:first-child{padding-top:0;border-top:none;}
            .fr-flow-arrow{display:none;}
            .fr-support-cta{padding-top:48px;}
            .fr-support-cta h3{font-size:26px;}
            .fr-consult{padding:80px 0;}
            .fr-consult h2{font-size:30px;}
            .fr-consult .head{margin-bottom:44px;}
            .fr-consult-grid{grid-template-columns:1fr;gap:28px;}
            .fr-btnrow .fr-back{width:auto;}
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
          <h1 className="fr-core text-balance">
            <span className="line1">매장이 메뉴에 맞추는 것이 아니라,</span>
            <span className="line2">메뉴가 상권에 맞춰 변합니다.</span>
          </h1>
          <p className="fr-hero-desc text-pretty">
            여러 <b>전문메뉴</b>를 한곳에서 즐기는 <b>신개념 분식</b> 브랜드입니다.
          </p>
          <span className="fr-kicker">Partner Program</span>
          <h2 className="fr-sub text-balance">후루룩찹찹 파트너가 되세요</h2>
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

      <section className="fr-support">
        <div className="fr-wrap">
          <div className="head">
            <span className="eyebrow">Partner Support</span>
            <h2 className="text-balance">후루룩찹찹이 함께합니다</h2>
            <p className="lead text-pretty">
              매장을 만드는 순간부터 <b>운영하는 과정까지 함께합니다.</b>
            </p>
          </div>

          <div className="fr-flow">
            <article className="fr-flow-item">
              <div className="fr-flow-num">01</div>
              <h3>상권 · 메뉴 구성</h3>
              <p className="text-pretty">
                상권과 고객 특성을 고려하여 매장에 적합한 메뉴 구성을 함께 설계합니다.
              </p>
            </article>
            <span className="fr-flow-arrow" aria-hidden="true">
              →
            </span>
            <article className="fr-flow-item">
              <div className="fr-flow-num">02</div>
              <h3>조리 · 운영 교육</h3>
              <p className="text-pretty">메뉴 조리부터 실제 매장 운영에 필요한 기본 교육을 제공합니다.</p>
            </article>
            <span className="fr-flow-arrow" aria-hidden="true">
              →
            </span>
            <article className="fr-flow-item">
              <div className="fr-flow-num">03</div>
              <h3>오픈 준비</h3>
              <p className="text-pretty">주방 구성과 매장 운영 준비부터 오픈까지 필요한 과정을 함께합니다.</p>
            </article>
            <span className="fr-flow-arrow" aria-hidden="true">
              →
            </span>
            <article className="fr-flow-item">
              <div className="fr-flow-num">04</div>
              <h3>운영 · 메뉴 관리</h3>
              <p className="text-pretty">
                오픈 이후에도 메뉴와 운영을 점검하고 매장에 필요한 개선 방향을 함께 고민합니다.
              </p>
            </article>
          </div>

          <div className="fr-support-cta">
            <h3 className="text-balance">함께 시작해볼까요?</h3>
            <a href="#consult" className="fr-cta">
              파트너 상담하기
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <ConsultForm />
    </div>
  )
}
