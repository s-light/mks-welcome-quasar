import { Q as QPage } from "./QPage.01157e3c.js";
import { p as openBlock, J as createBlock, M as withCtx, n as createBaseVNode, H as toDisplayString, z as unref, G as createTextVNode } from "./index.ae443054.js";
const _hoisted_1 = ["href"];
const _hoisted_2 = ["href"];
const _sfc_main = {
  __name: "AboutPage",
  setup(__props) {
    const appinfo = { "name": "mks-welcome-quasar", "version": "0.0.1", "productName": "MYS MKS", "description": "evulution of the material-website" };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: "flex column",
        style: { "align-items": "center" }
      }, {
        default: withCtx(() => [
          createBaseVNode("section", null, [
            createBaseVNode("h4", null, toDisplayString(unref(appinfo).productName), 1),
            createBaseVNode("p", null, "version: v" + toDisplayString(unref(appinfo).version), 1),
            createBaseVNode("p", null, [
              createTextVNode(toDisplayString(unref(appinfo).description), 1),
              _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
              _cache[1] || (_cache[1] = createTextVNode(" find the project repository at ")),
              _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("a", {
                target: "_blank",
                href: unref(appinfo).projectUrl
              }, toDisplayString(unref(appinfo).projectUrl), 9, _hoisted_1)
            ]),
            createBaseVNode("p", null, [
              _cache[3] || (_cache[3] = createTextVNode(" a live preview version is hosted at")),
              _cache[4] || (_cache[4] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("a", {
                target: "_blank",
                href: unref(appinfo).previewUrl
              }, toDisplayString(unref(appinfo).previewUrl), 9, _hoisted_2)
            ])
          ])
        ]),
        _: 1
      });
    };
  }
};
export { _sfc_main as default };
