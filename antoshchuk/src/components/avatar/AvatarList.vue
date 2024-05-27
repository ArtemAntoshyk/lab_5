<template>
  <ul class="list-group rounded-0 list-group-horizontal justify-content-center pb-2">
    <avatar-item
        v-for="src in avatarSrc"
        :key="src"
        :src="src"
    />                     
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AvatarItem from './AvatarItem.vue';
const avatarSrc = ref([
    'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
    'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp',
    'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp',
    'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp'

])
</script>