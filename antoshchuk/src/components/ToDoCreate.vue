<template>
  <button class="btn btn-primary" style="background-color: #3da2c3;" @click="emits('create')">
    +
  </button>
</template>
<script setup lang="ts">
const emits = defineEmits(['create'])
</script>