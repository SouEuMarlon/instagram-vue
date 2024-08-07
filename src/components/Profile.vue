<script setup>
import Container from "@/components/Container.vue";
</script>

<template>
  <Container>
    <div class="profile-container">
      <h1>UserBar</h1>
      <h1>ImageGalery</h1>
    </div>
  </Container>
</template>

<style scoped>
.container {
  background: #fff;
}
.profile-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  padding: 20px 0;
  width: 100%;
}
</style>
