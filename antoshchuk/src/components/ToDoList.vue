<template>
  <div class="d-flex flex-column gap-2">
    <ul class="list-group rounded-0">
      <to-do-item
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        :index="index"
        @checked="handleChecked"
      />                   
    </ul>
    <to-do-new v-if="isCreate" @cancel="close" @success="addItem"/>
    <to-do-create v-else @create="isCreate = true"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ToDoItem from './ToDoItem.vue';
import ToDoCreate from './ToDoCreate.vue';
import ToDoNew from './ToDoNew.vue';
import type { IToDoItem } from '../repositories/toDo'
import { useToDo } from '../repositories/toDo';

const { get, save } = useToDo()

const items = ref<IToDoItem[]>(get())
const isCreate= ref(false)

const close = () => {
  isCreate.value = false
}

const addItem = (newItem: IToDoItem) => {
  items.value.push(newItem)
  save(items.value)
  close()
}

const handleChecked = (value: boolean, index: number) => {
  const newItem = items.value[index]
  newItem.checked = value
  items.value[index] = newItem
}
</script>