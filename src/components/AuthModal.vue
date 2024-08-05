<script setup>
import { ref } from 'vue';

const props = defineProps(['isLogin']);

const open = ref(false);

const showModal = () => {
  open.value = true;
};

const handleOk = e => {
  open.value = false;
};

const title = props.isLogin ? 'Login' : 'SignUp';

</script>

<template>
  <div>
    <AButton type="primary" @click="showModal" class="btn">{{title}}</AButton>
    <AModal v-model:open="open" :title="title" @ok="handleOk">
      <div class="modal-content">
        <AInput v-if="!isLogin" v-model:value="value" placeholder="Username" />
        <AInput v-model:value="value" placeholder="E-mail" />
        <AInput v-model:value="value" placeholder="Password" />
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