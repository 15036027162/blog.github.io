<template>
  <div>
    <div id="myChart" :style="{ width: '100%', height: '400px' }"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import * as echarts from "echarts";

const option = defineProps(['option'])

onMounted(() => {
  // 这里是由于图表渲染快于父元素导致图表比例溢出，做的一个延缓操作
  setTimeout(() => {
    line();
  }, 500);
});

const line = () => {
  let myChart = echarts.init(document.getElementById("myChart") as HTMLCanvasElement);
  myChart.setOption(option.option);
  window.onresize = function () {
    //自适应大小, 不用的话不会自适应大小。
    myChart.resize();
  };
};
</script>
