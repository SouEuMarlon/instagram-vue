<script setup>
const props = defineProps(["username", "userInfo"]);
</script>

<template>
  <div class="userbar-container">
    <div class="top-content">
      <ATypographyTitle :level="2">
        {{ props.username }}
      </ATypographyTitle>
    </div>
    <div class="bottom-content">
      <ATypographyTitle :level="5">
        {{ props.userInfo.posts }}
      </ATypographyTitle>
      <ATypographyTitle :level="5">
        {{ props.userInfo.followers }} followers
      </ATypographyTitle>
      <ATypographyTitle :level="5">
        {{ props.userInfo.following }} following
      </ATypographyTitle>
    </div>
  </div>
</template>

<style scoped>
.userbar-container {
  /* align-items: center;
  display: flex; */
  padding: 0 0 75px;
}

.top-content h2 {
  margin: 0 0 20px;
  padding: 0;
}

.bottom-content {
  align-items: center;
  display: flex;
  gap: 20px;
}

.bottom-content h5 {
  margin: 0;
  padding: 0;
}
</style>
