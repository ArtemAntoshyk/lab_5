<template>
  <div class="w-100 h-100 d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-8 col-xl-6">
          <div class="card rounded-3">
            <div class="card-body p-4">
              <p class="mb-2">
                <span class="h2 me-2">Team Meeting</span>
                <span class="badge bg-danger">checklist</span>
              </p>
              <p class="text-muted pb-2">04/01/2020 • ML - 1321</p>
              <to-do-list/>
              <div class="divider d-flex align-items-center my-4">
                <p class="text-center mx-3 mb-0" style="color: #a2aab7;">Shared with</p>
              </div>
              <avatar-list/>
              <button @click="logout">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ToDoList from '../components/ToDoList.vue';
import AvatarList from '../components/avatar/AvatarList.vue';
import {useUser} from "../repositories/user";
import {useRouter} from "vue-router";

const $user = useUser()
const router = useRouter()
const logout = () => {
  $user.logout(() => {
    router.push("/auth/login")
  })
}
</script>