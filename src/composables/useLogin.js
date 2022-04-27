import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const error = ref(null);

const login = async (email, password) => {
  try {
    error.value = null
    const res = await projectAuth.signInWithEmailAndPassword(email, password)

    console.log(res)

    return res

  } catch (err) {
    console.log(err.message)
    error.value = err.message
  }
}

const useLogin = () => {
  return {error, login}
}

export default useLogin