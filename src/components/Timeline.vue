<script setup>
import Card from '@/components/Card.vue';
import Container from '@/components/Container.vue';

const data = [
  {
    id: 1,
    username: 'Michael Jackson',
    url: 'https://i.discogs.com/10-puAu0pWTplVoYjyZ1LfFRZKZkL3bYj3XiUt74z2s/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE1ODg1/LTE1NDY1OTA3NDYt/NDc4Ni5qcGVn.jpeg',
    caption: 'Thriller'
  },
  {
    id: 2,
    username: 'Whitney Houston',
    url: 'https://mb.web.sapo.io/b52b86adf122c565711ca349dd7f72598d667dfd.jpg',
    caption: 'I wanna dance with somebody'
  },
  {
    id: 3,
    username: 'Usher',
    url: 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/09/25/1372671798-usher-e-confirmado-como-atracao-principal-do-super-bowl-2024ji6crfm.jpg',
    caption: 'Yeah'
  }
]
</script>

<template>
  <Container>
    <div class="timeline-container" >
      <Card 
        v-for="post in data" 
        :key="post.id" 
        :post="post"
      />
    </div>
  </Container>
</template>

<style scoped>
.container{
  background: #fff;
}
.timeline-container{
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  padding: 20px 0;
  width: 100%;
}
</style>