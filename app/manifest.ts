import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "후루룩찹찹",
    short_name: "후루룩찹찹",
    description: "신개념 분식 · 외식업 창업 파트너 후루룩찹찹",
    start_url: "/",
    display: "standalone",
    background_color: "#F3EFE8",
    theme_color: "#A63A2C",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
