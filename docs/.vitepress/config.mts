import { defineConfig } from "vitepress";
import nav from "./config/nav.mts";
import sidebar from "./config/sidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Ming的博客",
  description: "A Personal Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    outline: { label: "目录", level: [2, 3] },
    socialLinks: [
      { icon: "github", link: "https://github.com/jm-wxr/a-personal-blog" },
    ],
    logo: {
      src: "/image/logo.svg",
      width: "24px",
      height: "24px",
    },
  },
});
