<template>
  <div>
    <div>Login</div>
    <button @click="login" :disabled="loading">
      <span v-if="loading">
        Loading...
      </span>
      <span v-else>
        Login
      </span>
    </button>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import {useUser} from "../../repositories/user";
import {useRouter} from "vue-router";

const router = useRouter()
const loading = ref(false)
const email = ref('admin@gmail.com')
const password = ref('qwerty1234')
const $user = useUser()
const login = async () => {
  try {
    loading.value = true
    await $user.login(email.value, password.value, () => {
      router.push("/")
    })
  } finally {
    loading.value = false
  }
}


</script>