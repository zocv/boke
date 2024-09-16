<template>
  <div class="bk-all">
    <bk-nav></bk-nav>
    <bk-main></bk-main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
.bk-all {
  background-color: greenyellow;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>