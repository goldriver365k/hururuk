import type { Metadata } from "next"
import Link from "next/link"
import { RegionSelect } from "./region-select"
import { ConsultForm } from "./consult-form"
import { HeroIntro } from "./hero-intro"

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
            --fr-white:#FCFBF8;
            --fr-graywash:#F2F0EB;
            --fr-beige:#F1E6D3;
            --fr-deepbrown:#2E1B12;
            --fr-red-glow:rgba(178,58,46,.10);
            --fr-grid-line:rgba(74,44,34,.055);
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
            padding:22px 0;position:relative;
          }
          .fr-logo{
            display:inline-flex;align-items:center;
            text-decoration:none;
          }
          .fr-logo img{height:68px;width:auto;display:block;}
          .fr-tag{
            font-size:12px;font-weight:600;letter-spacing:0.22em;
            text-transform:uppercase;color:var(--fr-warm);
          }
          .fr-nav-right{display:flex;align-items:center;gap:28px;}
          .fr-navlinks{display:flex;align-items:center;gap:24px;list-style:none;}
          .fr-navlinks a{
            font-size:13.5px;font-weight:600;color:var(--fr-charcoal-soft);
            text-decoration:none;white-space:nowrap;transition:color .2s ease;
          }
          .fr-navlinks a:hover{color:var(--fr-gold);}
          .fr-home-link{
            font-size:12px;font-weight:700;letter-spacing:0.02em;
            color:var(--fr-ivory);
            background:var(--fr-charcoal);
            border:1px solid var(--fr-charcoal);
            border-radius:999px;
            padding:8px 18px;
            text-decoration:none;
            transition:opacity .2s;
            white-space:nowrap;
          }
          .fr-home-link:hover{opacity:.85;}
          .fr-home-short{display:none;}
          .fr-navtoggle{display:none;}
          .fr-navburger{display:none;}

          .fr-hero{
            min-height:calc(100vh - 67px);
            display:flex;flex-direction:column;justify-content:center;
            padding:80px 0 96px;
            position:relative;overflow:hidden;
            background:
              radial-gradient(ellipse 900px 520px at 12% -8%, var(--fr-red-glow), transparent 60%),
              linear-gradient(180deg, #F8F2E8 0%, var(--fr-ivory) 100%);
          }
          .fr-hero::before{
            content:"";position:absolute;right:-140px;bottom:-180px;
            width:520px;height:520px;border-radius:50%;
            background:radial-gradient(circle at 30% 30%, rgba(176,138,62,.12), transparent 70%);
            pointer-events:none;
          }
          .fr-hero::after{
            content:"";position:absolute;left:-70px;top:18%;
            width:280px;height:280px;border-radius:50%;
            border:1px solid rgba(178,58,46,.09);
            pointer-events:none;
          }
          .fr-hero .fr-wrap{position:relative;z-index:1;}
          .fr-hero-intro{
            display:none;
            position:fixed;inset:0;z-index:999;
            background:#0a0a0a;
            align-items:center;justify-content:center;
            cursor:pointer;
            opacity:1;transition:opacity .5s ease;
          }
          .fr-hero-intro.is-closing{opacity:0;}
          .fr-hero-intro-video{
            width:100%;height:100%;object-fit:cover;display:block;
          }
          .fr-hero-intro-skip{
            position:absolute;right:28px;bottom:28px;
            color:#fff;font-size:13px;font-weight:600;letter-spacing:.04em;
            padding:10px 18px;border:1px solid rgba(255,255,255,.5);border-radius:999px;
            background:rgba(0,0,0,.3);
          }
          @media(min-width:821px){
            .fr-hero-intro{display:flex;}
          }
          .fr-hero-row{display:flex;align-items:center;gap:24px;}
          .fr-hero-text{flex:1 1 46%;min-width:0;}
          .fr-hero-char{
            flex:1 1 50%;display:flex;flex-direction:column;align-items:center;
            gap:12px;min-width:0;
          }
          .fr-hero-visual-main{
            width:100%;max-width:460px;display:flex;justify-content:center;
          }
          .fr-hero-food-main{
            width:100%;height:auto;display:block;
            aspect-ratio:16/9;object-fit:cover;border-radius:4px;
            filter:drop-shadow(0 20px 32px rgba(38,36,31,.18));
          }
          .fr-hero-signature{
            font-family:'Noto Serif KR',serif;font-size:15px;font-weight:600;
            color:var(--fr-charcoal-soft);letter-spacing:-0.01em;
          }
          .fr-hero-signature b{color:var(--fr-red);font-weight:800;}
          .fr-kicker{
            display:inline-flex;align-items:center;gap:12px;
            font-size:12.5px;font-weight:600;letter-spacing:0.2em;
            text-transform:uppercase;color:var(--fr-gold);
            margin:0 0 24px;
          }
          .fr-kicker::before{content:"";width:32px;height:1px;background:var(--fr-gold);}
          .fr-kicker::after{content:"";flex:1;height:1px;background:var(--fr-line);}
          .fr-core{
            display:flex;flex-direction:column;gap:4px;
            margin-bottom:20px;word-break:keep-all;overflow-wrap:break-word;
          }
          .fr-core .line1{
            font-size:34px;line-height:1.32;font-weight:800;
            letter-spacing:-0.03em;color:var(--fr-charcoal);
          }
          .fr-core .hl{font-weight:800;color:var(--fr-red);}
          .fr-core .line2{
            font-size:34px;line-height:1.32;font-weight:800;
            letter-spacing:-0.03em;color:var(--fr-charcoal);
          }
          .fr-hero-desc{
            font-size:18px;line-height:1.6;font-weight:400;
            color:var(--fr-charcoal-soft);
            max-width:480px;margin-bottom:18px;
          }
          .fr-hero-desc b{font-weight:700;color:var(--fr-red);}
          .fr-hero-kw{
            font-size:12.5px;font-weight:600;letter-spacing:0.14em;
            text-transform:uppercase;color:var(--fr-warm);
            margin-bottom:36px;
          }
          .fr-hero-ctas{display:flex;align-items:center;gap:14px;flex-wrap:wrap;}
          .fr-hero-cta-primary{
            display:inline-flex;align-items:center;gap:12px;
            background:var(--fr-red);color:var(--fr-ivory);
            font-size:15px;font-weight:700;
            padding:18px 34px;border-radius:2px;
            border:1px solid var(--fr-red);
            transition:background .2s ease,transform .2s ease;
          }
          .fr-hero-cta-primary:hover{background:#961F15;transform:translateY(-1px);}
          .fr-hero-cta-primary .arrow{display:inline-block;transition:transform .2s ease;}
          .fr-hero-cta-primary:hover .arrow{transform:translateX(4px);}
          .fr-hero-cta-secondary{
            display:inline-flex;align-items:center;
            background:var(--fr-paper);color:var(--fr-charcoal);
            font-size:15px;font-weight:600;
            padding:18px 30px;border-radius:2px;
            border:1px solid var(--fr-line);
            transition:border-color .2s ease,transform .2s ease;
          }
          .fr-hero-cta-secondary:hover{border-color:var(--fr-charcoal);transform:translateY(-1px);}

          .fr-meta{
            display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:56px;
            padding-top:32px;border-top:1px solid var(--fr-line);
          }
          .fr-meta .item{min-width:0;}
          .fr-meta .item .k{
            font-size:12px;font-weight:700;letter-spacing:0.1em;
            color:var(--fr-gold);margin-bottom:8px;
          }
          .fr-meta .item .v{
            font-size:14px;font-weight:600;color:var(--fr-charcoal-soft);
            word-break:keep-all;
          }

          .fr-model{
            border-top:1px solid var(--fr-line);
            padding:120px 0;
            background:var(--fr-white);
            background-image:
              linear-gradient(var(--fr-grid-line) 1px, transparent 1px),
              linear-gradient(90deg, var(--fr-grid-line) 1px, transparent 1px);
            background-size:64px 64px;
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
            background:var(--fr-graywash);
            background-image:
              linear-gradient(var(--fr-grid-line) 1px, transparent 1px),
              linear-gradient(90deg, var(--fr-grid-line) 1px, transparent 1px);
            background-size:80px 80px;
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
          .fr-region-hint{
            font-size:14.5px;font-weight:700;color:var(--fr-red);
            margin-top:18px;letter-spacing:-0.01em;
          }
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

          .fr-opt--area{
            display:flex;align-items:center;justify-content:space-between;gap:8px;
            padding-bottom:54px;
          }
          .fr-opt-text{flex:0 0 45%;min-width:0;}
          .fr-opt-illust{
            flex:1 1 auto;display:flex;align-items:center;justify-content:center;
            border-radius:50%;color:var(--fr-charcoal-soft);
          }
          .fr-opt-illust svg{
            width:88px;height:88px;
            filter:drop-shadow(0 6px 10px rgba(38,36,31,.12));
          }
          .fr-opt--univ .fr-opt-illust{background:radial-gradient(circle, rgba(217,119,6,.10), transparent 72%);}
          .fr-opt--resid .fr-opt-illust{background:radial-gradient(circle, rgba(176,138,62,.12), transparent 72%);}
          .fr-opt--office .fr-opt-illust{background:radial-gradient(circle, rgba(107,131,145,.12), transparent 72%);}
          .fr-opt[aria-pressed="true"] .fr-opt-illust{color:var(--fr-ivory);}

          .fr-opt-cta{
            position:absolute;right:20px;bottom:16px;
            display:inline-flex;align-items:center;gap:2px;
            font-size:13px;font-weight:700;letter-spacing:-0.01em;
            color:var(--fr-warm);
            padding:6px 12px;border-radius:999px;
            background:var(--fr-graywash);
            transition:background .2s ease,color .2s ease;
          }
          .fr-opt[aria-pressed="true"] .fr-opt-cta{
            background:rgba(243,239,232,.12);color:var(--fr-warm);
          }
          @media(hover:hover){
            .fr-opt--area:hover{box-shadow:0 10px 28px rgba(38,36,31,.10);}
            .fr-opt--area:hover .fr-opt-cta{background:var(--fr-red);color:var(--fr-ivory);}
          }

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
            background:var(--fr-white);
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
            position:relative;
          }
          .fr-flow::before{
            content:"";position:absolute;left:0;right:0;top:26px;height:1px;
            background:var(--fr-line);
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

          .fr-startup{
            border-top:1px solid var(--fr-line);
            padding:120px 0;
            background-color:var(--fr-beige);
            background-image:radial-gradient(var(--fr-grid-line) 1px, transparent 1px);
            background-size:22px 22px;
          }
          .fr-startup .head{max-width:720px;margin-bottom:64px;}
          .fr-startup .eyebrow{
            display:inline-flex;align-items:center;gap:12px;
            font-size:12.5px;font-weight:600;letter-spacing:0.2em;
            text-transform:uppercase;color:var(--fr-gold);
            margin-bottom:28px;
          }
          .fr-startup .eyebrow::before{content:"";width:32px;height:1px;background:var(--fr-gold);}
          .fr-startup h2{
            font-size:44px;line-height:1.25;font-weight:700;
            letter-spacing:-0.02em;margin-bottom:28px;
          }
          .fr-startup .lead{
            font-size:18px;line-height:1.75;font-weight:400;
            color:var(--fr-charcoal-soft);max-width:560px;
          }
          .fr-startup h3.sub{
            font-size:18px;font-weight:700;letter-spacing:-0.01em;
            margin:64px 0 24px;
          }
          .fr-startup h3.sub:first-of-type{margin-top:0;}
          .fr-costlist{border-top:1px solid var(--fr-line);}
          .fr-costrow{
            display:flex;align-items:center;justify-content:space-between;
            padding:18px 4px;border-bottom:1px solid var(--fr-line);
          }
          .fr-costrow .k{font-size:15px;font-weight:600;color:var(--fr-charcoal);}
          .fr-costrow .v{font-size:13.5px;font-weight:500;color:var(--fr-warm);}
          .fr-steps{
            display:grid;grid-template-columns:repeat(4,1fr);gap:24px 20px;
          }
          .fr-step{padding-top:20px;border-top:2px solid var(--fr-warm-soft);}
          .fr-step .n{
            font-size:12px;font-weight:700;letter-spacing:0.08em;
            color:var(--fr-gold);margin-bottom:8px;
          }
          .fr-step .t{font-size:15px;font-weight:600;color:var(--fr-charcoal);}

          .fr-faq{
            border-top:1px solid var(--fr-line);
            padding:120px 0;
            background:var(--fr-white);
          }
          .fr-faq .head{max-width:720px;margin-bottom:56px;}
          .fr-faq .eyebrow{
            display:inline-flex;align-items:center;gap:12px;
            font-size:12.5px;font-weight:600;letter-spacing:0.2em;
            text-transform:uppercase;color:var(--fr-gold);
            margin-bottom:28px;
          }
          .fr-faq .eyebrow::before{content:"";width:32px;height:1px;background:var(--fr-gold);}
          .fr-faq h2{
            font-size:44px;line-height:1.25;font-weight:700;
            letter-spacing:-0.02em;
          }
          .fr-faqlist{border-top:1px solid var(--fr-line);}
          .fr-faqitem{border-bottom:1px solid var(--fr-line);}
          .fr-faqitem summary{
            padding:22px 4px;font-size:16px;font-weight:600;
            color:var(--fr-charcoal);cursor:pointer;list-style:none;
          }
          .fr-faqitem summary::-webkit-details-marker{display:none;}
          .fr-faqitem summary::after{content:"+";float:right;color:var(--fr-gold);}
          .fr-faqitem[open] summary::after{content:"–";}
          .fr-faqitem p{
            padding:0 4px 22px;font-size:14.5px;line-height:1.75;
            color:var(--fr-charcoal-soft);max-width:640px;
          }

          .fr-consult{
            padding:120px 0;
            background:var(--fr-deepbrown);
            color:var(--fr-ivory);
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
            color:var(--fr-ivory);
          }
          .fr-consult .lead{
            font-size:18px;line-height:1.75;font-weight:400;
            color:rgba(243,239,232,.72);max-width:560px;
          }
          .fr-consult .lead b{font-weight:600;color:var(--fr-ivory);}
          .fr-consult .fr-consult-summary{
            background:rgba(255,255,255,.045);border-color:rgba(255,255,255,.14);
          }
          .fr-consult .fr-consult-summary .lbl{color:var(--fr-gold);}
          .fr-consult .fr-consult-summary dl .row{border-top-color:rgba(255,255,255,.12);}
          .fr-consult .fr-consult-summary dt{color:rgba(243,239,232,.55);}
          .fr-consult .fr-consult-summary dd{color:var(--fr-ivory);}
          .fr-consult .fr-consult-summary .empty{color:rgba(243,239,232,.65);}
          .fr-consult .fr-field label,.fr-consult .fr-field-label{color:var(--fr-ivory);}
          .fr-consult .fr-optional{color:rgba(243,239,232,.5);}
          .fr-consult .fr-field input,.fr-consult .fr-field textarea{
            background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.18);color:var(--fr-ivory);
          }
          .fr-consult .fr-field input::placeholder,.fr-consult .fr-field textarea::placeholder{
            color:rgba(243,239,232,.4);
          }
          .fr-consult .fr-field input:focus,.fr-consult .fr-field textarea:focus{border-color:var(--fr-gold);}
          .fr-consult .fr-radio{
            background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.18);color:rgba(243,239,232,.8);
          }
          .fr-consult .fr-radio:hover{border-color:rgba(255,255,255,.4);}
          .fr-consult .fr-radio[aria-pressed="true"]{
            background:var(--fr-gold);border-color:var(--fr-gold);color:var(--fr-deepbrown);
          }
          .fr-consult .fr-back{color:var(--fr-ivory);border-color:rgba(255,255,255,.25);}
          .fr-consult .fr-back:hover{border-color:var(--fr-ivory);}
          .fr-consult .fr-next{background:var(--fr-gold);color:var(--fr-deepbrown);border-color:var(--fr-gold);}
          .fr-consult .fr-next:hover:not(:disabled){background:#c49a4a;}
          .fr-consult .fr-contact{border-top-color:rgba(255,255,255,.14);}
          .fr-consult .fr-contact-label{color:rgba(243,239,232,.55);}
          .fr-consult .fr-contact-value{color:var(--fr-ivory);}
          .fr-consult .fr-contact-item:hover .fr-contact-value{color:var(--fr-gold);}
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

          @media(max-width:960px){
            .fr-navlinks{
              display:none;
              position:absolute;top:100%;left:0;right:0;
              flex-direction:column;align-items:flex-start;gap:0;
              background:var(--fr-paper);border-bottom:1px solid var(--fr-line);
              padding:8px 24px 16px;
            }
            .fr-navlinks a{padding:12px 0;width:100%;border-top:1px solid var(--fr-line);}
            .fr-navlinks a:first-child{border-top:none;}
            .fr-navtoggle:checked ~ .fr-navlinks{display:flex;}
            .fr-navburger{
              display:inline-flex;align-items:center;justify-content:center;
              width:34px;height:34px;font-size:20px;cursor:pointer;
              color:var(--fr-charcoal);
            }
          }
          @media(max-width:820px){
            .fr-wrap{padding:0 24px;}
            .fr-hero{padding:0 0 64px;}
            .fr-hero-row{flex-direction:column;gap:28px;min-width:0;margin-left:0;margin-right:0;}
            .fr-hero-char{order:0;gap:16px;width:100%;align-items:stretch;}
            .fr-hero-text{order:1;flex-basis:auto;width:100%;}
            .fr-hero-visual-main{
              max-width:none;width:100vw;margin-left:50%;transform:translateX(-50%);
            }
            .fr-hero-food-main{
              width:100vw;height:100dvh;aspect-ratio:auto;object-fit:cover;
              border-radius:0;filter:none;
            }
            .fr-hero-signature{font-size:14px;}
            .fr-core{max-width:100%;}
            .fr-core .line1{font-size:27px;}
            .fr-core .line2{font-size:27px;}
            .fr-hero-desc{font-size:16px;max-width:100%;}
            .fr-hero-kw{margin-bottom:28px;}
            .fr-hero-ctas{flex-direction:column;align-items:stretch;gap:12px;}
            .fr-hero-cta-primary,.fr-hero-cta-secondary{justify-content:center;padding:17px 24px;}
            .fr-tag{display:none;}
            .fr-logo img{height:52px;}
            .fr-home-link{padding:5px 12px;}
            .fr-home-full{display:none;}
            .fr-home-short{display:inline;}
            .fr-meta{display:grid;grid-template-columns:1fr 1fr;gap:20px 16px;margin-top:40px;padding-top:28px;}
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
            .fr-opt--area{padding-bottom:58px;}
            .fr-opt-illust svg{width:64px;height:64px;}
            .fr-opt-cta{right:16px;bottom:14px;font-size:12.5px;padding:5px 10px;}
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
            .fr-startup{padding:80px 0;}
            .fr-startup h2{font-size:30px;}
            .fr-startup .head{margin-bottom:44px;}
            .fr-steps{grid-template-columns:repeat(2,1fr);}
            .fr-faq{padding:80px 0;}
            .fr-faq h2{font-size:30px;}
            .fr-faq .head{margin-bottom:40px;}
            .fr-hero::before{width:280px;height:280px;right:-100px;bottom:-120px;}
            .fr-hero::after{display:none;}
            .fr-model{background-size:40px 40px;}
            .fr-region{background-size:48px 48px;}
            .fr-startup{background-size:18px 18px;}
          }
        `,
        }}
      />

      <HeroIntro />

      <header className="fr-header">
        <div className="fr-wrap">
          <div className="fr-nav">
            <Link href="/" className="fr-logo">
              <img src="/assets/logo-new.png" alt="후루룩찹찹" />
            </Link>
            <input type="checkbox" id="fr-navtoggle" className="fr-navtoggle" aria-hidden="true" />
            <ul className="fr-navlinks">
              <li><a href="#why">WHY 후루룩찹찹</a></li>
              <li><a href="/menu-select">메뉴소개</a></li>
              <li><a href="#start">매장모델</a></li>
              <li><a href="#startup">창업안내</a></li>
              <li><a href="#start">상권·점포</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
            <div className="fr-nav-right">
              <div className="fr-tag">Business Partnership</div>
              <a href="#consult" className="fr-home-link">
                가맹상담
              </a>
              <label htmlFor="fr-navtoggle" className="fr-navburger" aria-label="메뉴 열기">
                ☰
              </label>
            </div>
          </div>
        </div>
      </header>

      <main className="fr-hero">
        <div className="fr-wrap fr-hero-row">
          <div className="fr-hero-text">
            <span className="fr-kicker">Franchise Business</span>
            <h1 className="fr-core text-balance">
              <span className="line1">
                상권이 <b className="hl">다르면</b>,
              </span>
              <span className="line2">
                메뉴도 <b className="hl">달라야</b> 합니다.
              </span>
            </h1>
            <p className="fr-hero-desc text-pretty">
              상권에 맞춰 메뉴가 변하는
              <br />한 그릇 전문점 <b>후루룩찹찹</b>
            </p>
            <div className="fr-hero-kw">One Kitchen · Multi Menu</div>

            <div className="fr-hero-ctas">
              <a href="#consult" className="fr-hero-cta-primary">
                가맹 상담하기
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a href="#start" className="fr-hero-cta-secondary">
                내가 원하는 매장 만들어 보기
              </a>
            </div>

            <div className="fr-meta">
              <div className="item">
                <div className="k">01</div>
                <div className="v">상권 맞춤 메뉴</div>
              </div>
              <div className="item">
                <div className="k">02</div>
                <div className="v">소형매장 대응</div>
              </div>
              <div className="item">
                <div className="k">03</div>
                <div className="v">한 주방 다메뉴</div>
              </div>
              <div className="item">
                <div className="k">04</div>
                <div className="v">본사 운영지원</div>
              </div>
            </div>
          </div>

          <div className="fr-hero-char">
            <div className="fr-hero-visual-main">
              <video
                className="fr-hero-food-main"
                src="/assets/video/hero-main.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="후루룩찹찹 브랜드 영상"
              />
            </div>
            <p className="fr-hero-signature">
              당신의 가게에 <b>복</b>을 더하다
            </p>
          </div>
        </div>
      </main>

      <section className="fr-model" id="why">
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

      <section className="fr-startup" id="startup">
        <div className="fr-wrap">
          <div className="head">
            <span className="eyebrow">Getting Started</span>
            <h2 className="text-balance">창업안내</h2>
            <p className="lead text-pretty">
              창업비용과 가맹절차를 안내합니다. <b>확정되지 않은 금액은 상담을 통해 안내</b>해 드립니다.
            </p>
          </div>

          <h3 className="sub">창업비용 항목</h3>
          <div className="fr-costlist">
            {["가맹비", "교육비", "인테리어", "주방설비", "간판", "가구", "초도물품", "기타"].map((item) => (
              <div className="fr-costrow" key={item}>
                <span className="k">{item}</span>
                <span className="v">상담 시 안내</span>
              </div>
            ))}
          </div>

          <h3 className="sub">가맹절차</h3>
          <div className="fr-steps">
            {[
              "상담 신청",
              "상권 · 점포 검토",
              "사업설명",
              "계약",
              "매장 설계 · 공사",
              "조리 · 운영 교육",
              "오픈 준비",
              "GRAND OPEN",
            ].map((label, i) => (
              <div className="fr-step" key={label}>
                <div className="n">{String(i + 1).padStart(2, "0")}</div>
                <div className="t">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fr-faq" id="faq">
        <div className="fr-wrap">
          <div className="head">
            <span className="eyebrow">FAQ</span>
            <h2 className="text-balance">자주 묻는 질문</h2>
          </div>
          <div className="fr-faqlist">
            {[
              ["최소 몇 평부터 가능한가?", "10평부터 가능합니다."],
              ["점주는 직접 근무해야 하는가?", "상담 시 안내해 드립니다."],
              ["몇 명이 운영하는가?", "상담 시 안내해 드립니다."],
              [
                "메뉴를 전부 판매해야 하는가?",
                "상권과 매장 규모에 맞춰 메뉴 카테고리를 선택적으로 구성할 수 있습니다.",
              ],
              ["기존 식당을 후루룩찹찹으로 전환할 수 있는가?", "상담 시 안내해 드립니다."],
              [
                "상권에 따라 메뉴가 달라지는가?",
                "네, 대학가 · 주거 상권 · 오피스 등 상권 특성에 맞춰 메뉴 구성이 달라집니다.",
              ],
              ["교육기간은 얼마나 되는가?", "상담 시 안내해 드립니다."],
              ["식재료는 어떻게 공급되는가?", "상담 시 안내해 드립니다."],
              ["가맹비와 로열티는 얼마인가?", "상담 시 안내해 드립니다."],
            ].map(([q, a]) => (
              <details className="fr-faqitem" key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ConsultForm />
    </div>
  )
}
