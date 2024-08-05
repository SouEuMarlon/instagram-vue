<script setup>
const props = defineProps(['post']);

</script>

<template>
  <ACard hoverable style="width: 240px" class="card">
    <template #cover>
      <img :alt="post.username" :src="post.url" />
    </template>
    <ACardMeta :title="post.username">
      <template #description>{{post.caption}}</template>
    </ACardMeta>
  </ACard>
</template>

<style scoped>
.card {
  margin: 0 0 20px;
}
</style>