export default {
  "/examples/": getExamples(),
  "/harmonyos/": getHarmonyOS(),
  "/frontend/": getFrontend(),
};

function getExamples() {
  return [
    {
      text: "示例",
      items: [
        { text: "Markdown 示例", link: "/examples/markdown-examples" },
        { text: "Runtime API 示例", link: "/examples/api-examples" },
      ],
    },
  ];
}

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
      items: [],
    },
  ];
}
