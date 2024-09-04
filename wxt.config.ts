import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: {
    name: "Ultimate Color Picker",
    description:
      "Pick color with ease, all in one ultimate version color picker tool that satisfy all your needs.",
    author: "yeasin2002",

    developer: {
      name: "Md Kawsar Islam Yeasin ",
      url: "https://yeasin2002.netlify.app/",
    },
  },
});
