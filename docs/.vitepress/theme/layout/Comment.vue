<!-- Comment.vue -->
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { inBrowser } from "vitepress";
import Gitalk from "gitalk";

// const commentRef = ref<HTMLElement | null>(null);

const init = () => {
  if (inBrowser) {
    // const wrap = document.createElement("div");
    // wrap.setAttribute("id", "gitalk-container");
    // commentRef.value?.appendChild(wrap); // 把组件加入到想加载的地方 // querySelector的节点可自己根据自己想加载的地方设置
    const gitalk = new Gitalk({
      id: location.pathname, // 可选。默认为 location.href
      owner: "jm-wxr", // GitHub repository 所有者
      repo: "docs-comment", // GitHub repo
      clientID: "Ov23lip8OJQfB9mDVWVD", // clientID
      clientSecret: "c33f4c5c69337a7811617563173cf0a3f7489d60", // clientSecret
      admin: ["jm-wxr"], // GitHub repo 所有者
      labels: ["Gitalk"], // GitHub issue 标签
      proxy: "https://strong-caramel-969805.netlify.app/github_access_token",
      createIssueManually: true, //如果当前页面没有相应的 issue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
    });
    gitalk.render("gitalk-container");
  }
};

onMounted(() => {
  init();
});
</script>
<template>
  <div id="gitalk-container"></div>
</template>
