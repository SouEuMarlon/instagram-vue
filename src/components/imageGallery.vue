<script setup>
// import { ref } from 'vue'

const props = defineProps(["posts"]);
</script>

<template>
  <div class="image-gallery-container">
    <img
      v-for="post in props.posts"
      :key="post.id"
      :src="post.image"
      alt="post_image"
    />
  </div>
</template>

<style scoped>
.image-gallery-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.image-gallery-container img {
  width: 200px;
}
</style>
