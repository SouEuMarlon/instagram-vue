<script setup>
import { storeToRefs } from "pinia";
import { reactive, ref } from 'vue';
import { useUserStore } from "../stores/users";

const userStore = useUserStore()

const { errorMessage } = storeToRefs(userStore); // Aqui usamos o storeToRefs para trazer mudança de estado para a mensagem de erro

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

const handleOk = (e) => {
  userStore.handleSignup(userCredentials)
};

const title = props.isLogin ? 'Login' : 'SignUp';

</script>

<template>  
  <div>
    <AButton type="primary" @click="showModal" class="btn">{{title}}</AButton>
    <AModal v-model:open="open" :title="title" @ok="handleOk">
      <div class="modal-content">
        <AInput v-if="!isLogin" v-model:value="userCredentials.username" placeholder="Username" />
        <AInput v-model:value="userCredentials.email" placeholder="E-mail" />
        <AInput v-model:value="userCredentials.password" placeholder="Password" type="password"/>
        <ATypographyText v-if="errorMessage" type="danger">{{errorMessage}}</ATypographyText>
      </div>
    </AModal>
  </div>
</template>

<style scoped>
.modal-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>