"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/tabbar/tabbar-1/tabbar-1.js";
  "./pages/tabbar/tabbar-2/tabbar-2.js";
  "./pages/tabbar/tabbar-3/tabbar-3.js";
  "./pages/tabbar/tabbar-4/tabbar-4.js";
  "./pages/tabbar/tabbar-5/tabbar-5.js";
  "./pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release.js";
  "./pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video.js";
  "./pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:4", "App Launch");
    setTimeout(() => {
      common_vendor.index.setTabBarBadge({
        index: 1,
        text: "31"
      });
      common_vendor.index.showTabBarRedDot({
        index: 3
      });
    }, 1e3);
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:17", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:20", "App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
