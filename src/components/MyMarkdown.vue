<template>
    <!-- <VueMarkdown :source="source" :plugins="md_plugins" :options="md_options" /> -->
    <div class="md" v-html="contentHTML"></div>
</template>

<script setup>
import { computed, h, shallowRef } from "vue";

// import VueMarkdown from "vue-markdown-render";
// this component is based on
// https://github.com/cloudacy/vue-markdown-render/tree/master
// but as i want to handle relative image urls i have to create it here myself..
import MarkdownIt from "markdown-it";

// https://github.com/valeriangalliat/markdown-it-anchor/tree/master
import anchor from "markdown-it-anchor";

// https://github.com/nagaozen/markdown-it-toc-done-right
// import * as mdi_toc from "markdown-it-toc-done-right";

import { include as mdit_include } from "@mdit/plugin-include";

import markdownItPluginImgSrcAbs from "./markdown-it-plugin-img-src-abs";

import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";
// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// // Then register the languages you need
// hljs.registerLanguage('javascript', javascript);

const props = defineProps({
    source: String,
    filePath: String,
});

// const emit = defineEmits(['change', 'delete'])

const md_options = {
    html: true,
    linkify: true,
    typographer: true,
    // breaks:       false,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) {}
        }
        return ""; // use external default escaping
    },
    eval: false,
};

const md = shallowRef(new MarkdownIt(md_options));

// md.value.use(anchor, {
//   permalink: anchor.permalink.headerLink()
// });
// md.value.use(mdi_toc);
md.value.use(mdit_include, {
    // your options, currentPath is required
    currentPath: (env) => env.filePath,
});
md.value.use(markdownItPluginImgSrcAbs);

// function setupPlugins(plugins){
//     plugins.map(item => {
//         const [plugin, plugin_options] = item;
//         return (instance) => instance.use(plugin, plugin_options)
//     });
//     return
// }

// function plugin_with_options(plugin, options) {
//     // https://github.com/cloudacy/vue-markdown-render/issues/23#issuecomment-2136004517
//     return (instance) => instance.use(plugin, options);
// }

// const md_plugins = [MarkdownItAnchor, mdit_include];
// const md_plugins = [
//     MarkdownItAnchor,
//     plugin_with_options(mdit_include, { currentPath: (env) => env.filePath }),
// ];
// const md_plugins = [MarkdownItAnchor];


const contentHTML = computed(() => {
    return md.value.render(props.source, {
        filePath: props.filePath,
    });
});
</script>



