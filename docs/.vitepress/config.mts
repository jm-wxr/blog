import { defineConfig } from "vitepress";
import nav from "./config/nav.mts";
import sidebar from "./config/sidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Ming的博客",
  description: "A Personal Blog",
  base: "/blog/",
  head: [
    [
      "script",
      {},
      `
      window._hmt = window._hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b82696896669a6089cd44666b1ac7c7c";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    outline: { label: "目录", level: [2, 3] },
    socialLinks: [
      { icon: "github", link: "https://github.com/jm-wxr/a-personal-blog" },
    ],
    logo: {
      src: "/image/home/logo.svg",
      width: "24px",
      height: "24px",
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    search: {
      provider: "local",
    },
    lastUpdated: {
      text: "最后更新时间",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    footer: {
      message: "随便写点啥",
      copyright: "版权所有 @ 2024.6.2 jm-wxr",
    },
    editLink: {
      pattern: "https://github.com/jm-wxr/blog/edit/main/docs/:path",
      text: "有错误？帮我修正",
    },
  },
  markdown: {
    container: {
      detailsLabel: "显示代码",
      tipLabel: "提示",
      infoLabel: "参考",
    },
  },
});
