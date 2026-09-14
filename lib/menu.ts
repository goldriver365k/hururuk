export type MenuCategory = "덮밥" | "쌀국수 / 면류" | "라구 / 파스타" | "라멘 / 마라" | "돈까스"

export type MenuItem = {
  id: string
  name: string
  category: MenuCategory
  image: string
}

export const menuCategories: MenuCategory[] = [
  "덮밥",
  "쌀국수 / 면류",
  "라구 / 파스타",
  "라멘 / 마라",
  "돈까스",
]

const img = (file: string) => `/assets/menu/${file}.jpg`

export const menuItems: MenuItem[] = [
  // 덮밥
  { id: "garlic-pork-bap", name: "갈릭포크덮밥", category: "덮밥", image: img("garlic-donkatsu") },
  { id: "chashu-bap", name: "두툼차슈덮밥", category: "덮밥", image: img("jikhwa-beef-bap") },
  { id: "italy-crispy-pork-bap", name: "이태리바삭포크덮밥", category: "덮밥", image: img("garlic-butter-cheese-donkatsu") },
  { id: "tomato-pork-curry", name: "토마토돼지고기카레", category: "덮밥", image: img("pork-curry-bap") },
  { id: "hwasan-bulbaek", name: "화산불백", category: "덮밥", image: img("hwasan-bulbaek-popup") },

  // 쌀국수 / 면류
  { id: "chashu-pho", name: "두툼차슈쌀국수", category: "쌀국수 / 면류", image: img("chicken-pho") },
  { id: "soy-woosamgyeop-stirfry", name: "불향간장우삼겹볶음면", category: "쌀국수 / 면류", image: img("stirfry-pasta") },
  { id: "big-leg-pho", name: "왕다리쌀국수", category: "쌀국수 / 면류", image: img("spicy-pho") },
  { id: "woosamgyeop-bomb-pho", name: "우삼겹폭탄쌀국수", category: "쌀국수 / 면류", image: img("woosamgyeop-bomb-pho") },
  { id: "gochujang-woosamgyeop-stirfry", name: "화끈고추장우삼겹볶음면", category: "쌀국수 / 면류", image: img("spicy-chicken-bap") },

  // 라구 / 파스타
  { id: "ragu-bap", name: "고기듬뿍라구덮밥", category: "라구 / 파스타", image: img("kimchi-bulgogi-bap") },
  { id: "ragu-spaghetti", name: "고기듬뿍라구스파게티", category: "라구 / 파스타", image: img("sausage-ragu-spaghetti") },
  { id: "woosamgyeop-ragu-spaghetti", name: "불향우삼겹라구스파게티", category: "라구 / 파스타", image: img("sausage-ragu-spaghetti") },
  { id: "sausage-ragu-bap", name: "통소시지라구덮밥", category: "라구 / 파스타", image: img("chinese-seafood-bap") },
  { id: "sausage-ragu-spaghetti", name: "통소시지라구스파게티", category: "라구 / 파스타", image: img("sausage-ragu-spaghetti") },
  { id: "woosamgyeop-haejang-pasta", name: "우삼겹해장파스타", category: "라구 / 파스타", image: img("stirfry-pasta") },
  { id: "clam-chowder-sausage-spaghetti", name: "클램차우더소세지스파게티", category: "라구 / 파스타", image: img("sausage-ragu-spaghetti") },
  { id: "clam-chowder-spaghetti", name: "클램차우더스파게티", category: "라구 / 파스타", image: img("stirfry-pasta") },
  { id: "clam-chowder-woosamgyeop-spaghetti", name: "클램차우더우삼겹스파게티", category: "라구 / 파스타", image: img("stirfry-pasta") },

  // 라멘 / 마라
  { id: "fukuoka-ramen", name: "후쿠오카라멘", category: "라멘 / 마라", image: img("chicken-pho") },
  { id: "malatang", name: "마라탕", category: "라멘 / 마라", image: img("malatang") },
  { id: "cheese-malatang", name: "치즈마라탕", category: "라멘 / 마라", image: img("malatang") },

  // 돈까스
  { id: "donkatsu", name: "돈까스", category: "돈까스", image: img("garlic-donkatsu") },
]

export const menuByCategory = menuCategories.map((category) => ({
  category,
  items: menuItems.filter((item) => item.category === category),
}))
