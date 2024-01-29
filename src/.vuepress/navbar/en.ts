import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  {
    "text": "OpenPuya",
    "link": "/en/",
    "icon": "fa-solid fa-home",
  },
  {
    text: "MCU",
    link: "/en/mcu/",
    icon: "fa-solid fa-microchip",
    prefix : "/en/mcu/",
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
  }
]);
