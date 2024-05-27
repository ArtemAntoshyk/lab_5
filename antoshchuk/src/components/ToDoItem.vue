<template>
  <li class="list-group-item border-0 d-flex align-items-center ps-0" :class="{ 'text-line-through' :item.checked }">
    <input
      :id="`input-${index}`"
      class="form-check-input me-3"
      type="checkbox"
      aria-label="..."
      :checked="item.checked"
      @change="emits('checked', !item.checked, index)"
    />
    <label :for="`input-${index}`">{{ item.label }}</label>
  </li>
</template>

<script setup lang="ts">
import { IToDoItem } from '../repositories/toDo';
import type { PropType } from 'vue';

defineProps({
  item: {
    type: Object as PropType<IToDoItem>,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
const emits = defineEmits(['checked'])
</script>

<style scoped>
.text-line-through {
  text-decoration: line-through;
}

</style>