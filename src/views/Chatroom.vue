<template>
  <div class="container">
    <Navbar />
    <NewChatRoomForm />
  </div>
</template>

<script>
import NewChatRoomForm from '../components/NewChatRoomForm.vue'
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import { watch } from '@vue/runtime-core'
export default {
  components:{ Navbar, NewChatRoomForm },
  setup(){
    const { user } = getUser()
    const router = useRouter()

    watch(user, ()=>{
      if (!user.value) {
        router.push({ name:'welcome' })
      }
    })
  },
}
</script>

<style>

</style>