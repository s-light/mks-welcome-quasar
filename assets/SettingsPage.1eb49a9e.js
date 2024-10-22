import { Q as QPage } from "./QPage.ace6ca73.js";
import { n as openBlock, t as createBlock, u as withCtx, v as createBaseVNode, C as toDisplayString, D as unref } from "./index.2ba7ef10.js";
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
