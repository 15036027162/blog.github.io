<template>
  <div class="containers">
    <LoginThee :top="220" />
    <LoginWindow />
  </div>
</template>
<script lang="ts" setup>
import LoginThee from './components/LoginThree.vue';
import LoginWindow from './components/LoginWindow.vue';
</script>
