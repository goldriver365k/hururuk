export type MenuCategory = "rice" | "pho" | "mala" | "spaghetti" | "ramen" | "cutlet"

export type MenuItem = {
  id: string
  name: string
  tagline: string
  category: MenuCategory
  image: string
}

const img = (file: string) => `/assets/menu/${file}.jpg`

export const categoryLabels: Record<MenuCategory, string> = {
  rice: "덮밥",
  pho: "쌀국수",
  mala: "마라탕",
  spaghetti: "스파게티",
  ramen: "라멘",
  cutlet: "돈까스",
}

export const categoryOrder: MenuCategory[] = ["rice", "pho", "mala", "spaghetti", "ramen", "cutlet"]

export const menuItems: MenuItem[] = [
  {
    id: "hwasan-bulbaek",
    name: "화산불백",
    tagline: "남자의 소울푸드",
    category: "rice",
    image: "/assets/menu/hwasan-bulbaek.png",
  },
  {
    id: "mala-hwasan-bulbaek",
    name: "마라화산불백",
    tagline: "매운맛의 화산 폭발",
    category: "rice",
    image: "/assets/menu/mala-hwasan-bulbaek.png",
  },
  {
    id: "garlic-pork",
    name: "갈릭포크덮밥",
    tagline: "마늘향 가득한 불맛",
    category: "rice",
    image: "/assets/menu/garlic-pork.png",
  },
  {
    id: "italian-crispy-pork",
    name: "이태리바삭포크덮밥",
    tagline: "로마의 바삭한 포크",
    category: "rice",
    image: "/assets/menu/italian-crispy-pork.png",
  },
  {
    id: "tomato-pork-curry",
    name: "토마토돼지고기카레",
    tagline: "나폴리의 진한 토마토",
    category: "rice",
    image: "/assets/menu/tomato-pork-curry.png",
  },
  {
    id: "chashu-rice",
    name: "두툼챠슈덮밥",
    tagline: "후쿠오카 라멘집의 챠슈",
    category: "rice",
    image: "/assets/menu/chashu-rice.png",
  },
  {
    id: "woosamgyeop-bomb-pho",
    name: "우삼겹폭탄쌀국수",
    tagline: "하노이의 감성",
    category: "pho",
    image: img("woosamgyeop-bomb-pho"),
  },
  {
    id: "soy-woosamgyeop-stirfry",
    name: "불향간장 우삼겹볶음면",
    tagline: "사이공의 불향",
    category: "pho",
    image: img("stirfry-pasta"),
  },
  {
    id: "malatang",
    name: "마라탕",
    tagline: "그녀의 스트레스를 날려줄",
    category: "mala",
    image: img("malatang"),
  },
  {
    id: "fukuoka-ramen",
    name: "후쿠오카라멘",
    tagline: "나카스 포장마차의 맛",
    category: "ramen",
    image: img("chicken-pho"),
  },
  {
    id: "ragu-spaghetti",
    name: "고기듬뿍 라구스파게티",
    tagline: "로마의 마켓푸드",
    category: "spaghetti",
    image: img("sausage-ragu-spaghetti"),
  },
  {
    id: "donkatsu",
    name: "돈까스",
    tagline: "긴자 골목의 맛",
    category: "cutlet",
    image: img("garlic-donkatsu"),
  },
]
