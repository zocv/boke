<template>
  <div class="BKNav">
    <div class="BK-nav-item">home</div>
    <div class="BK-nav-item">笔记聚合</div>

  </div>
  <hr>
  <div>
    <div class="" v-for="item in BKNavData">
      {{ item.title }}
      <div class="" v-if="item.items">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const BKNavData = ref([
  {
    title: 'home',
  },
  {
    title: '笔记聚合',
    items: [{
      title: 'js'
    },
    {
      title: 'docker'
    }]
  }
])
</script>

<style scoped></style>