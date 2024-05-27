<template>
  <div class="container">
    <div class="row">
      <input v-model="newItem.label" class="input col-8"/>
      <button class="btn btn-danger col-2" @click="emits('cancel')">x</button>
      <button class="btn btn-success col-2" @click="emits('success', newItem)">+</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { IToDoItem } from '../repositories/toDo';

const emits = defineEmits(['cancel', 'success'])

const newItem = ref<IToDoItem>({
  label: '',
  checked: false
})
</script>

<style scoped>
.input{
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000;
  color: #000;
  outline: none;
}
</style>