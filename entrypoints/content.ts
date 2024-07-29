export default defineContentScript({
  matches: ["*://*.google.com/*", "*://*.github.com", "https://github.com"],

  main() {
    console.log("Hello content.");
  },
});
