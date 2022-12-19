<template>
  <div>
    <a-card title="搜索引擎占比" :bordered="false" class="container">
      <div id="myChart1" :style="{ width: '100%', height: '400px' }"></div>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import * as echarts from "echarts";

onMounted(() => {
  // 这里是由于图表渲染快于父元素导致图表比例溢出，做的一个延缓操作
  setTimeout(() => {
    line();
  }, 500);
});

const line = () => {
  let myChart = echarts.init(document.getElementById("myChart1") as HTMLCanvasElement);
  
  myChart.setOption(
    {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Vue',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'React',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Vite',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190, 330, 410]
        }
      ]
    }
  );
  window.onresize = function () {
    //自适应大小, 不用的话不会自适应大小。
    myChart.resize();
  };
};
</script>
