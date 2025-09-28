"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      active: false
    };
  },
  onLoad() {
  },
  onShow() {
    this.active = true;
  },
  onHide() {
    this.active = false;
  },
  methods: {
    goToPage(url) {
      if (!url)
        return;
      common_vendor.index.navigateTo({
        url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.active ? 1 : "",
    b: common_assets._imports_0,
    c: common_assets._imports_1,
    d: common_vendor.o(($event) => $options.goToPage("/pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release")),
    e: common_assets._imports_2,
    f: common_vendor.o(($event) => $options.goToPage("/pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video")),
    g: common_assets._imports_3,
    h: common_vendor.o(($event) => $options.goToPage("/pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa")),
    i: $data.active ? 1 : ""
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-afdd7fb7"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabbar/tabbar-3/tabbar-3.js.map
