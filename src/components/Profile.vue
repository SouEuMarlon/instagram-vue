<script setup>
import Container from "@/components/Container.vue";
import UserBar from "@/components/UserBar.vue";
import ImageGallery from "@/components/imageGallery.vue";
</script>

<template>
  <Container>
    <div class="profile-container">
      <UserBar
        username="soueu_marlon"
        :userInfo="{
          posts: 4,
          followers: 4320,
          following: 100,
        }"
      />
      <ImageGallery
        :posts="[
          {
            id: 1,
            image: 'https://picsum.photos/200/300',
          },
          {
            id: 2,
            image: 'https://picsum.photos/200/300',
          },
          {
            id: 3,
            image: 'https://picsum.photos/200/300',
          },
          {
            id: 4,
            image: 'https://picsum.photos/200/300',
          },
        ]"
      />
    </div>
  </Container>
</template>

<style scoped>
.container {
  background: #fff;
}
.profile-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  padding: 20px 0;
  width: 100%;
}
</style>
