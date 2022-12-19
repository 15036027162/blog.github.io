<template>
  <div>
    <HomeCard/>
    <a-row class="grid-demo" :gutter="24">
      <a-col :span="16">
        <ProjectCard/>
      </a-col>
      <a-col :span="8">
        <Navigation/>
      </a-col>
    </a-row>
    <a-row class="grid-demo" :gutter="24">
      <a-col :span="16">
        <BarEcharts/>
      </a-col>
      <a-col :span="8">
        <PieEcharts/>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import HomeCard from './components/HomeCard.vue';
import BarEcharts from './components/BarEcharts.vue';
import PieEcharts from './components/PieEcharts.vue';
import ProjectCard from './components/ProjectCard.vue';
import Navigation from './components/Navigation.vue';
</script>
<style>
</style>