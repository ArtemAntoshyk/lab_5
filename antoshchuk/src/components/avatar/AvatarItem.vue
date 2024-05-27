<template>
  <li class="list-group-item border-0 d-flex align-items-center p-0">
    <img
      :src="src"
      alt="avatar"
      class="rounded-circle me-n2"
      width="45">
  </li>
</template>
<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true
  }
})
</script>