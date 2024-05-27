import { ref } from 'vue'

export interface IToDoItem {
  label: string
  checked: boolean
}

export const useToDo = () => {
  const mockedData = ref([
    { label: 'Task list and assignments', checked: false },
    { label: 'Set due date and assignments', checked: false },
    { label: 'Remove duplicate tasks and stories', checked: false },
    { label: 'Update the userflow and stories', checked: false },
    { label: 'Adjust the components', checked: false }
  ])

  const get = (): IToDoItem[] => {
    const todosData = localStorage.getItem('todos')
    return todosData ? JSON.parse(todosData) : mockedData.value
  }

  const save = (items: IToDoItem[]): void => {
    localStorage.setItem("todos", JSON.stringify(items))
  }



  return { get, save}
}