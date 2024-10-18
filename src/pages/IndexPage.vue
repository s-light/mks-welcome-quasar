<template>
    <q-page class="flex flex-center content-stretch">
        <section>
            <div>Markdown document loaded and rendered here:</div>
            <vue-markdown :source="src" :plugins="md_plugins" :options="mdOptions" />
        </section>
    </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import VueMarkdown from "vue-markdown-render";
// import LightPaint from "src/components/LightPaint.vue";

// import { useTheTimeStore } from "stores/thetime.js";

// import TimerDisplay from "components/TimerDisplay.vue";

import MarkdownItAnchor from "markdown-it-anchor";

import hljs from "highlight.js";
import 'highlight.js/styles/night-owl.css';
// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// // Then register the languages you need
// hljs.registerLanguage('javascript', javascript);

const mdOptions = {
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) {}
        }
        return ""; // use external default escaping
    },
};

import { include as mdit_include } from "@mdit/plugin-include";

// function setupPlugins(plugins){
//     plugins.map(item => {
//         const [plugin, plugin_options] = item;
//         return (instance) => instance.use(plugin, plugin_options)
//     });
//     return
// }

function plugin_with_options(plugin, options) {
    // https://github.com/cloudacy/vue-markdown-render/issues/23#issuecomment-2136004517
    return (instance) => instance.use(plugin, options);
}

// const md_plugins = [MarkdownItAnchor, mdit_include];
// const md_plugins = [
//     MarkdownItAnchor,
//     plugin_with_options(mdit_include, { currentPath: (env) => env.filePath }),
// ];
const md_plugins = [MarkdownItAnchor];

// import MarkDownData from '../../../mks/readme.md';
import MarkDownData from "../../mks/readme.md?raw";
// console.log(MarkDownData);
import mksContent from '../../mks/';
console.log("mksContent", mksContent);

// // console.log(file_list);
// for (const item of Object.keys(file_list).sort()) {
//     console.log(item);
// }
// const file_tree = () => {
//     let file_tree = {};
//     const dir_funktionen = import.meta.glob("./*/*.md", {
//         query: "?raw",
//         // import: "default",
//     });
//     console.log(dir_funktionen);
//     dir_funktionen.en;
//     return file_tree;
// }

// export default file_tree();


// const src_mks = ref("# ping");
const src = ref(MarkDownData);

// const thetime = useTheTimeStore();

// $q.notify('Message')

const $q = useQuasar();
// https://quasar.dev/quasar-plugins/addressbar-color
// $q.addressbarColor.set('#a2e3fa')

// dark mode
// get status
// console.log($q.dark.isActive); // true, false
// get configured status
// console.log($q.dark.mode) // "auto", true, false
// set status
$q.dark.set(true); // or false or "auto"
// toggle
// $q.dark.toggle()
</script>
