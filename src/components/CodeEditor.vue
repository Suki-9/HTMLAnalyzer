<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import * as monaco from "monaco-editor";


const
  props = withDefaults(defineProps(), {
    scrollBeyondLastLine: false,
    roundedSelection: true,
    readOnly: false,
    theme: "vs-dark",
    language: "html",
  }),

  editor = ref()



onMounted(() => {
  editor.value = document.getElementById("editor")
  if (editor.value) monaco.editor.create(editor.value, { ...props })
})
onBeforeUnmount(() => {
  editor.value.dispose()
})
</script>

<template>
  <div id="editor"></div>
</template>