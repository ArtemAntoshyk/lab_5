<template>
  <div>
    <div>Sign Up</div>
    <button @click="signup">Sign up</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const loading = ref(false)
const email = ref('admin@gmail.com')
const password = ref('qwerty1234')

const signup = async () => {
  try {
    loading.value = true
    await createUserWithEmailAndPassword(getAuth() , email.value, password.value).then(() => {
      console.log('registed successfully')
    })
  } finally {
    loading.value = false
  }
}
</script>