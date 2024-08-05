<script setup>
  import AuthModal from '@/components/AuthModal.vue';
import Container from '@/components/Container.vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

  const searchUsername = ref('')

  const onSearch = () => {}
  const isAuthenticated = ref(false)

</script>
<template>
  <ALayoutHeader>
    <Container>
      <div class="nav-container">
        <div class="right-content">
          <RouterLink to="/">Instagram</RouterLink>
          <AInputSearch
            v-model:value="searchUsername"
            placeholder="Username..."
            style="width: 200px"
            @search="onSearch"
          />
        </div>
        <div class="left-content" v-if="!isAuthenticated">
          <AuthModal :isLogin="false"/>
          <AuthModal :isLogin="true"/>
        </div>
        <div class="left-content" v-else>
          <AButton type="primary">Profile</AButton>
          <AButton type="primary">Logout</AButton>
        </div>
      </div>
    </Container>
  </ALayoutHeader>
</template>

<style scoped> 
.nav-container {  
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  max-width: 1000px;
  width: 100%;
}

.right-content,.left-content{
  align-items: center;
  display: flex;
}

.right-content{
  gap: 10px;
}

.left-content{
  gap: 10px;
}
</style>