<template>
  <div class="welcome container">
    <p>Welcome</p>
    <h4 class="successSignup" v-if="showStatus">Signup successfull</h4>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @showChatroomPage="showChatroom"/>
      <p>No account? Just make it <span @click="showLogin=false;showStatus-false">here!</span> </p>
    </div>
    <div v-else>
      <h2>Signup</h2>
      <SignupForm @showLoginPage="changeShowLogin"/>
      <p>Have an account? Login <span @click="showLogin=true">here!</span> </p>
    </div>
    <a @click="switchForm">Switch</a>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
  components:{ SignupForm, LoginForm },
  setup(){
    const showLogin = ref(true)
    const showStatus = ref(false)
    const router = useRouter()

    const changeShowLogin = () => {
      showLogin.value = true  
      showStatus.value = true  
    }

    const showChatroom = () => {
      router.push({name: 'chatroom'})
    }

    return { showLogin, showStatus, changeShowLogin, showChatroom}
  }
}
</script>

<style>
  .welcome{
    text-align: center;
    padding: 20px 0;
  }
  /* FORM STYLES */
  .welcome form{
    width: 300px;
    margin: 20px auto;
  }
  .welcome label{
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input{
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome button{
    margin: 20px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
</style>