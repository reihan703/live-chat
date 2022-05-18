<template>
  <nav v-if="user">
    <div class="text">
      <p>Hello {{ user.displayName }}</p>
      <p class="email">currently loggedin as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
export default {
  setup(){
    const { error, logout } = useLogout()
    const { user } = getUser()
    const router = useRouter()

    const handleClick = async() => {
      await logout()
      // if(!error.value){
      //   router.push({name: 'welcome'})
      // }
    }

    return { handleClick, user }
  }
}
</script>

<style>
  nav{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #eee;
  }
  nav p{
    color: #444;
    margin: 2px auto;
    font-size: 16px;
  }
  nav p.email{
    color: #999;
    font-size: 14px;
  }
  nav div.text{
    text-align: left;
  }
</style>