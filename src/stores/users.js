import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('users', () => {
  const user = ref(null)
  const errorMessage = ref("")

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = () =>{}

  const handleSignup = (credentials) =>{
    const {email, password, username} = credentials

    if(password.length < 6){
      return errorMessage.value = "Password length is too short"
    }

    if(username.length < 4){
      return errorMessage.value = "Username length is too short"
    }

    if(!validateEmail(email)){
      return errorMessage.value = "Email is invalid"
    }

    errorMessage.value = ""
  }

  const handleLogout = () =>{}

  const getUser = () =>{}

  return { user, errorMessage, handleLogin, handleSignup, handleLogout, getUser }
})
