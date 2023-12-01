import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    // "/en/": {
    //   lang: "en-US",
    //   title: "Docs Demo",
    //   description: "A docs demo for vuepress-theme-hope",
    // },
    "/": {
      lang: "zh-CN",
      title: "OpenPuya",
      description: "OpenPuya 资料站",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
