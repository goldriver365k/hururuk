import Script from "next/script"

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap nav-row">
          <a className="brandmark" href="#">
            <img src="/assets/logo-wide.png" alt="후루룩찹찹" />
          </a>
          <nav>
            <ul>
              <li>
                <a href="#philosophy">브랜드 소개</a>
              </li>
              <li>
                <a href="#concept">브랜드 컨셉</a>
              </li>
              <li>
                <a href="#menu">메뉴</a>
              </li>
              <li>
                <a href="#franchise">가맹 안내</a>
              </li>
            </ul>
          </nav>
          <a className="btn btn-primary" href="#contact">
            가맹 문의
          </a>
        </div>
      </header>

      <section className="hero wrap">
        <div className="kicker">One Bowl Specialty Brand</div>
        <h1>
          한 그릇에 <em>최고의 만족</em>을 담다
        </h1>
        <p>
          2026 외식 소비 핵심 트렌드 &apos;한그릇 오리지널리티&apos; 브랜드 선언. 한 그릇의 새로운 기준으로 외식업의
          패러다임을 바꿉니다.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#menu">
            시그니처 메뉴 보기
          </a>
          <a className="btn btn-ghost" href="#franchise">
            가맹 안내
          </a>
        </div>
      </section>

      <section id="philosophy" className="wrap">
        <div className="sec-head">
          <div className="sec-num">01</div>
          <h2 className="sec-title">브랜드 철학</h2>
        </div>
        <div className="philo-grid">
          <div className="philo-card">
            <h3>좋은 한 끼가 하루를 바꿉니다</h3>
            <p>
              후루룩찹찹은 바쁜 현대인들에게 단순히 대충 때우는 식사가 아닌 온전하고 고품격의 한 끼를 선사하기 위해
              탄생했습니다. 맛있는 한 끼, 든든한 한 끼, 행복한 한 끼를 매일 식탁 위에 실현하여 고객의 매일을 긍정적이고
              풍요롭게 변화시키는 것을 지향합니다.
            </p>
          </div>
          <div className="philo-card">
            <h3>새로운 한그릇 외식 문화의 창조</h3>
            <p>
              기존 분식의 한계를 타파하고 프리미엄 단품 요리 시장의 공백을 정밀하게 타격합니다. 전문 다이닝 수준의 맛을
              보장하면서도 빠르고 합리적인 소비 패턴을 충족시키는 신개념 외식 패러다임을 제안합니다.
            </p>
          </div>
        </div>
      </section>

      <section id="concept" className="wrap" style={{ paddingTop: 0 }}>
        <div className="sec-head">
          <div className="sec-num">02</div>
          <h2 className="sec-title">브랜드 컨셉</h2>
          <p className="sec-desc">
            전문점 대표 메뉴를 한 곳에서. 고객이 여러 전문 카테고리 매장을 번거롭게 찾아다닐 필요가 없도록 전 세계적으로
            대중성이 완벽히 검증된 한그릇 요리들만 정교하게 큐레이션했습니다.
          </p>
        </div>
        <div className="concept-wrap">
          <img src="/assets/menu/garlic-donkatsu.jpg" alt="대표 메뉴" />
          <ul className="concept-list">
            <li>
              <b>덮밥 카테고리</b> — 불향 가득한 고품격 고기 덮밥 라인업
            </li>
            <li>
              <b>누들 카테고리</b> — 깊고 진한 프리미엄 아시안 쌀국수
            </li>
            <li>
              <b>양식 스파게티</b> — 셰프 특제 소스로 만든 대중적 파스타
            </li>
            <li>
              <b>MZ 맞춤 스페셜</b> — 트렌디한 감각의 마라탕 및 프리미엄 돈까스
            </li>
          </ul>
        </div>
      </section>

      <section id="menu" className="wrap">
        <div className="sec-head">
          <div className="sec-num">03</div>
          <h2 className="sec-title">시그니처 대표 메뉴 라인업</h2>
        </div>
        <div className="collection-grid">
          <div className="collect-card">
            <div className="thumb">
              <img src="/assets/menu/jikhwa-beef-bap.jpg" alt="직화 우삼겹 덮밥" />
            </div>
            <div className="body">
              <span className="badge">부동의 1위 메뉴</span>
              <h3>직화 우삼겹 덮밥</h3>
              <p>
                고화력 직화 조리로 불맛을 생생히 입힌 풍성한 우삼겹 고기와 후루룩찹찹 특제 간장 베이스 소스가 만나
                폭발적인 감칠맛을 자랑합니다.
              </p>
              <div className="row">
                <span>대표 메뉴</span>
                <b>9,500원</b>
              </div>
            </div>
          </div>
          <div className="collect-card">
            <div className="thumb">
              <img src="/assets/menu/woosamgyeop-bomb-pho.jpg" alt="우삼겹 프리미엄 쌀국수" />
            </div>
            <div className="body">
              <span className="badge">아시안 정통 쌀국수</span>
              <h3>우삼겹 프리미엄 쌀국수</h3>
              <p>
                양지와 사골을 24시간 진하게 고아낸 고품격 명품 육수에 쫄깃한 면발과 불향 가득한 직화 우삼겹 토핑이
                조화롭습니다.
              </p>
              <div className="row">
                <span>대표 메뉴</span>
                <b>10,500원</b>
              </div>
            </div>
          </div>
          <div className="collect-card">
            <div className="thumb">
              <img src="/assets/menu/sausage-ragu-spaghetti.jpg" alt="우삼겹 라구 스파게티" />
            </div>
            <div className="body">
              <span className="badge">신개념 양식 시그니처</span>
              <h3>우삼겹 라구 스파게티</h3>
              <p>
                오랜 시간 공들여 끓여낸 정통 토마토 비프 라구 소스의 깊은 바디감에 직화 우삼겹 고기 토핑을 가미해 맛과
                가성비를 완벽히 양립했습니다.
              </p>
              <div className="row">
                <span>대표 메뉴</span>
                <b>11,000원</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 0 }}>
        <div className="sec-head">
          <div className="sec-num">04</div>
          <h2 className="sec-title">전체 시그니처 메뉴 아키텍처</h2>
        </div>
        <table className="arch">
          <tbody>
            <tr>
              <th>카테고리 구분</th>
              <th>전체 대표 메뉴 구성</th>
              <th>핵심 특장점 요약</th>
            </tr>
            <tr>
              <td>시그니처 덮밥류</td>
              <td>직화 우삼겹 덮밥, 돼지불백 덮밥, 된장 삼겹살 덮밥, 중화식 해물덮밥, 고추장 항정살 덮밥 등</td>
              <td>초고화력 직화 테크닉으로 원초적 풍미와 육즙 밀착</td>
            </tr>
            <tr>
              <td>월드 누들 (쌀국수)</td>
              <td>우삼겹 쌀국수, 왕다리 쌀국수, 차슈 쌀국수</td>
              <td>전통 동남아 육수 공정에 기초한 깊고 맑은 맛</td>
            </tr>
            <tr>
              <td>이탈리안 스파게티</td>
              <td>라구 스파게티, 우삼겹 라구 스파게티, 소시지 라구 스파게티 등</td>
              <td>다진 고기가 듬뿍 들어간 자체 수제형 풍성한 소스 설계</td>
            </tr>
            <tr>
              <td>스페셜 &amp; 트렌디</td>
              <td>갈릭버터 돈까스, 마라탕, 우삼겹 라면</td>
              <td>핵심 유입 고객층인 MZ 세대 맞춤형 다채로운 단품 리스트</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="wrap" style={{ paddingTop: 0 }}>
        <div className="sec-head">
          <div className="sec-num">05</div>
          <h2 className="sec-title">전체 메뉴 갤러리</h2>
        </div>
        <div className="gal-grid">
          {[
            ["garlic-donkatsu", "갈릭돈까스"],
            ["garlic-butter-cheese-donkatsu", "갈릭버터치즈돈까스"],
            ["kimchi-bulgogi-bap", "김치불고기덮밥"],
            ["chicken-pho", "닭고기쌀국수"],
            ["pork-curry-bap", "돼지고기카레"],
            ["malatang", "마라탕"],
            ["spicy-chicken-bap", "매운닭고기덮밥"],
            ["spicy-pho", "매운쌀국수"],
            ["mushroom-bap", "모듬버섯덮밥"],
            ["mozzarella-donkatsu", "모짜렐라폭포돈까스"],
            ["stirfry-pasta", "볶음파스타"],
            ["samgyeop-doenjang-bap", "삼겹된장덮밥"],
            ["sausage-ragu-spaghetti", "소세지라구스파게티"],
            ["woosamgyeop-bomb-pho", "우삼겹폭탄쌀국수"],
            ["chinese-seafood-bap", "중화식해물덮밥"],
            ["jikhwa-beef-bap", "직화소고기덮밥"],
          ].map(([file, label]) => (
            <div className="gal-tile" key={file}>
              <img src={`/assets/menu/${file}.jpg`} alt={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="target" className="wrap">
        <div className="target-wrap">
          <div>
            <div className="sec-num">06</div>
            <h2 className="sec-title" style={{ marginBottom: 24 }}>
              타깃 고객 세그먼트 분석
            </h2>
            <div className="target-list">
              <div className="target-row">
                <b>직장인 코어 고객군</b>
                <span>40%</span>
              </div>
              <div className="target-row">
                <b>대학생 및 외국인 유학생</b>
                <span>30%</span>
              </div>
              <div className="target-row">
                <b>트렌디 1인 가구 / 혼밥족</b>
                <span>20%</span>
              </div>
              <div className="target-row">
                <b>가족단위 및 단순 유입 고객</b>
                <span>10%</span>
              </div>
            </div>
          </div>
          <div className="quote-block">
            시간 관리가 엄격한 <b>직장인</b> 및 합리적이면서 품격 있는 고속 한 끼를 원하는 <b>대학생/유학생</b> 층이 핵심
            수요 기반의 <b>90%</b>를 견고하게 형성합니다.
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 0 }}>
        <div className="sec-head">
          <div className="sec-num">07</div>
          <h2 className="sec-title">일반 분식 대비 브랜드 지표 비교</h2>
        </div>
        <div className="compare">
          <div className="bar-row">
            <div className="label">후루룩찹찹 평균 객단가</div>
            <div className="bar-track">
              <div className="bar-fill red" style={{ width: "80%" }}>
                9,500원 ~ 12,000원
              </div>
            </div>
          </div>
          <div className="bar-row">
            <div className="label">일반 분식 브랜드</div>
            <div className="bar-track">
              <div className="bar-fill gray" style={{ width: "52%" }}>
                5,500원 ~ 7,500원
              </div>
            </div>
          </div>
          <div className="bar-row">
            <div className="label">후루룩찹찹 가맹점 예상 마진율</div>
            <div className="bar-track">
              <div className="bar-fill red" style={{ width: "75%" }}>
                35% 이상 설계 권장
              </div>
            </div>
          </div>
          <div className="bar-row">
            <div className="label">일반 분식 브랜드</div>
            <div className="bar-track">
              <div className="bar-fill gray" style={{ width: "50%" }}>
                25% 내외 유지
              </div>
            </div>
          </div>
          <p style={{ fontSize: "13.5px", color: "var(--muted)", marginTop: 8 }}>
            동일 자원으로 단품 가치를 극대화하여 기존 대비 40% 이상 향상된 강력한 매출 및 마진 설계 메커니즘을 창출합니다.
          </p>
        </div>
      </section>

      <section id="franchise" className="wrap" style={{ paddingTop: 0 }}>
        <div className="sec-head">
          <div className="sec-num">08</div>
          <h2 className="sec-title">핵심 입지 추천 및 가맹 운영 전략</h2>
        </div>
        <div className="fr-grid">
          <div className="fr-card">
            <div className="mk">01</div>
            <h3>최소 인력 중심의 컴팩트 주방 시스템 설계</h3>
            <p>
              조리 동선 및 전처리 프로세스를 극대화하여 점주 본인 포함 단 2~3인 미만의 스태프로 피크타임 테이블 회전을
              완전히 해결합니다.
            </p>
          </div>
          <div className="fr-card">
            <div className="mk">02</div>
            <h3>표준화된 가맹 교육 시스템 및 반가공 물류 공급</h3>
            <p>
              원격 및 본사 오프라인 단기 밀착형 교육(3일 내 완성)을 완비하여 주방 경험이 전무한 초보 경영주라도 첫날부터
              일정한 특급 맛을 발현합니다.
            </p>
          </div>
          <div className="fr-card">
            <div className="mk">03</div>
            <h3>핵심 최적 상권 (앵커 입지) 정밀 포지셔닝</h3>
            <p>
              수익성과 혼밥 유입이 완전하게 검증된 오피스 타운, 대학가, 초대형 몰/백화점 인포멀 푸드코트, 터미널 배후
              지역을 중점 타깃합니다.
            </p>
          </div>
        </div>
      </section>

      <div className="cta-band" id="contact">
        <div className="wrap">
          <img src="/assets/mascot.png" alt="후루룩찹찹 마스코트" />
          <h2>Questions &amp; Answers</h2>
          <p>
            외식업 성공의 새로운 지평, 후루룩찹찹이 그 미래를 선도하겠습니다.
            <br />
            가맹 및 입점 제안 파트너십 문의 : info@hururukchapchap.com | 02-1234-5678
          </p>
          <a
            className="btn btn-primary"
            href="mailto:info@hururukchapchap.com"
            style={{ background: "var(--gold)", borderColor: "var(--gold)", color: "var(--ink)" }}
          >
            가맹 문의하기
          </a>
        </div>
      </div>

      <footer>© 2026 HURURUK CHAPCHAP. ONE BOWL SPECIALTY BRAND.</footer>

      <div className="popup-overlay" id="promoPopup">
        <div className="popup-box">
          <button className="popup-close" id="popupCloseBtn" aria-label="닫기">
            {"\u00d7"}
          </button>
          <img src="/assets/menu/hwasan-bulbaek-popup.jpg" alt="화산불백 신메뉴 출시" />
          <div className="popup-footer">
            <button id="popupHideToday">오늘 하루 보지 않기</button>
            <a className="cta" href="#menu" id="popupCta">
              메뉴 보러가기
            </a>
          </div>
        </div>
      </div>

      <Script src="/script.js" strategy="afterInteractive" />
    </>
  )
}
