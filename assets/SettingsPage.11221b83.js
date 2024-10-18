import { Q as QPage } from "./QPage.3d994d05.js";
import { k as openBlock, l as createBlock, m as withCtx, n as createBaseVNode, z as toDisplayString, u as unref } from "./index.f7a8c2cc.js";
const _sfc_main = {
  __name: "SettingsPage",
  setup(__props) {
    const appinfo = { "name": "mks-welcome-quasar", "version": "0.0.1", "productName": "MYS MKS", "description": "evulution of the material-website" };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: "flex column",
        style: { "align-items": "center" }
      }, {
        default: withCtx(() => [
          createBaseVNode("section", null, [
            createBaseVNode("h4", null, toDisplayString(unref(appinfo).productName), 1)
          ])
        ]),
        _: 1
      });
    };
  }
};
export { _sfc_main as default };
