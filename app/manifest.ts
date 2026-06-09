import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: "Alexis",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF9F6",
    theme_color: "#111111",
    icons: [
      { src: "/icon.png", sizes: "any", type: "image/png" },
    ],
  };
}
