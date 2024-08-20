<script setup>
import { storeToRefs } from "pinia";
import { reactive, ref } from 'vue';
import { useUserStore } from "../stores/users";

const userStore = useUserStore()

const { errorMessage, loading, user } = storeToRefs(userStore); // Aqui usamos o storeToRefs para trazer mudança de estado para a mensagem de erro

const props = defineProps(['isLogin']);
const open = ref(false);

// Aqui criaremos as credenciais do usuário em modo reativo, criando um objeto reativo.
const userCredentials = reactive({
  email: "",
  password: "",
  username: ""
})

const showModal = () => {
  open.value = true;
};

const clearUserCredentialsInput = () => {
  userCredentials.email = "";
  userCredentials.password = "";
  userCredentials.username = "";
  userStore.clearErrorMessage();
};

const handleOk = async () => {
  if(props.isLogin){
    await userStore.handleLogin({
      email: userCredentials.email,
      password: userCredentials.password
    });
  } else {
    await userStore.handleSignup(userCredentials);
  }
  //await userStore.handleSignup(userCredentials); essa linha sai e entra a linha de cima
  if(user.value){
    open.value = false;
    clearUserCredentialsInput();
  }
};

const handleCancel = () => {
  clearUserCredentialsInput();
  open.value = false;
};

const title = props.isLogin ? 'Login' : 'SignUp';

</script>

<template>  
  <div>
    <AButton type="primary" @click="showModal" class="btn">{{title}}</AButton>
    <AModal v-model:open="open" :title="title" @ok="handleOk">
      <template #footer>
        <AButton key="back" @click="handleCancel">
          Cancel
        </AButton>
        <AButton 
          :disabled="loading" 
          key="submit" 
          type="primary" 
          :loading="loading" 
          @click="handleOk"
        >
          Submit
        </AButton>
      </template>
      <div v-if="!loading" class="input-container">
        <AInput v-if="!isLogin" v-model:value="userCredentials.username" placeholder="Username" />
        <AInput v-model:value="userCredentials.email" placeholder="E-mail" />
        <AInput v-model:value="userCredentials.password" placeholder="Password" type="password"/>
      </div>
      <div v-else class="spinner">
        <ASpin size="large" />
      </div>
      <ATypographyText v-if="errorMessage" type="danger">{{errorMessage}}</ATypographyText>
    </AModal>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 120px;
}
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}
</style>