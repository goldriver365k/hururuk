// 홈("/")을 가맹모집(파트너) 중심 페이지로 전환.
// 실제 화면 구현은 app/franchise/page.tsx를 그대로 재사용한다 (중복 코드 생성 금지).
// "/franchise" URL도 동일한 화면을 계속 보여주므로 기존 외부 링크가 깨지지 않는다.
export { default, metadata } from "./franchise/page"
