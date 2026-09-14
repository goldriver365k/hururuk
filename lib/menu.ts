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
