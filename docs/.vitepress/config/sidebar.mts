export default {
  "/misc/": getMisc(),
  "/harmonyos/": getHarmonyOS(),
  "/frontend/": getFrontend(),
};

function getHarmonyOS() {
  return [
    {
      text: "开始",
      collapsed: true,
      items: [
        { text: "介绍", link: "/harmonyos/getstarted/introduce" },
        {
          text: "Web 开发者转 HarmonyOS",
          link: "/harmonyos/getstarted/web-developer",
        },
      ],
    },
    {
      text: "项目实战",
      collapsed: true,
      items: [
        {
          text: "log插件的使用与axios的基本封装",
          link: "/harmonyos/project/log-and-axios",
        },
      ],
    },
  ];
}

function getFrontend() {
  return [
    {
      text: "开始",
      collapsed: true,
      items: [
        {
          text: "学习路线",
          link: "/frontend/getstarted/roadmap",
        },
        {
          text: "官方网站汇总",
          link: "/frontend/getstarted/website",
        },
        {
          text: "VS Code使用",
          link: "/frontend/getstarted/vscode",
        },
      ],
    },
    {
      text: "Vue3",
      collapsed: true,
      items: [
        {
          text: "项目准备",
          link: "/frontend/vue3/project-prepare",
        },
        {
          text: "项目实战",
          link: "/frontend/vue3/project",
        },
      ],
    },
  ];
}

function getMisc() {
  return [
    {
      text: "示例",
      collapsed: true,
      items: [
        { text: "Markdown 示例", link: "/misc/examples/markdown-examples" },
        { text: "Runtime API 示例", link: "/misc/examples/api-examples" },
      ],
    },
    { text: "个人博客搭建", link: "/misc/blog-build" },
  ];
}
