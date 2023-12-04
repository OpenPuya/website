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
      "PY32F030xx",
      "PY32F003xx",
      "PY32F002Axx",
      "PY32F002Bxx",
      "PY32F07x",
    ],
  }
]);
