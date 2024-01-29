import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    "text": "OpenPuya",
    "link": "/",
    "icon": "fa-solid fa-home",
  },
  {
    text: "MCU",
    link: "/mcu/",
    icon: "fa-solid fa-microchip",
    prefix : "/mcu/",
    children: [
      "PY32F002Axx",
      "PY32F002Bxx",
      "PY32F030xx",
      "PY32F003xx",
      "PY32F040xx",
      "PY32F07x",
      "PY32L020xx",
      "PY32F403xx",
    ],
  },
  {
    text: "工具",
    link: "/tool/",
    icon: "fa-solid fa-tools",
    prefix : "/tool/",
    
  }
]);
