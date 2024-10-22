<template>
    <!-- <q-page class="flex flex-center content-stretch"> -->
    <q-page class="">
        <section>
            <div>Markdown document loaded and rendered here:</div>
            <my-markdown
                :source="mks_welcome['./readme.md'].content"
                :file-path="mks_welcome.path_base"
            />
            <ul class="card-wrapper q-pa-md row items-start q-gutter-md">
                <li v-for="(item, index) in mks_funktionen" :key="index">
                    <q-card class="my-card">
                        <q-card-section>
                            <my-markdown
                                :source="item['./readme.md'].content"
                                :file-path="item.path_base"
                            />
                        </q-card-section>
                    </q-card>
                </li>
            </ul>
        </section>
    </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";

import MyMarkdown from "src/components/MyMarkdown.vue";
// import LightPaint from "src/components/LightPaint.vue";

// import { useTheTimeStore } from "stores/thetime.js";

// import TimerDisplay from "components/TimerDisplay.vue";

import mksContent from "../../public/mks/";
// console.log("mksContent", mksContent);
console.log("mksContent", mksContent);
const mks_welcome = ref(mksContent["welcome"]);
// console.log(`mksContent['welcome']['./readme.md']['content']`, mksContent['welcome']['./readme.md']['content']);
console.log(`mksContent.welcome`, mksContent.welcome);
// console.log(`mksContent.welcome['./readme.md'].content`, mksContent.welcome['./readme.md'].content);
// console.log(`mksContent.welcome['./readme.md'].path_base`, mksContent.welcome['./readme.md'].path_base);
const mks_funktionen = ref(mksContent["funktionen"]);
console.log("mks_funktionen", mks_funktionen.value);

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

<style lang="sass" scoped>
.card-wrapper
    list-style: none
    padding: 0
    li
        margin: 0
.my-card
  width: 100%
  max-width: 30vw
</style>

<style lang="sass">
.my-card
  img
    max-width: 100%
    max-height: 20vh
</style>
