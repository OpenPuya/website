import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "OpenPuya",
      description: "OpenPuya Documentation Site",
    },
    "/": {
      lang: "zh-CN",
      title: "OpenPuya",
      description: "OpenPuya 资料站",
    },
  },

  theme,
  extendsPage: (page) => {
    // 在 routeMeta 中设置目录信息
    page.routeMeta = {
      // 目录标题
      title: page.title,
      // ... 其他信息
    };
  }

  // Enable it with pwa
  // shouldPrefetch: false,
});
