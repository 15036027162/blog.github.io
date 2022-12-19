<template>
  <div>
    <a-card title="饼图示例" :bordered="false" class="container">
      <div id="myChart2" :style="{ width: '100%', height: '400px' }"></div>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import * as echarts from "echarts";

onMounted(() => {
  // 这里是由于图表渲染快于父元素导致图表比例溢出，做的一个延缓操作
  setTimeout(() => {
    lines();
  }, 500);
});

const lines = () => {
  let myChart = echarts.init(document.getElementById("myChart2") as HTMLCanvasElement);
  
  myChart.setOption(
    {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        bottom: 10,
        left: 'center',
        data: ['深圳', '北京', '上海', '晋城', '山西']
      },
      series: [
        {
          type: 'pie',
          radius: '65%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          data: [
            { value: 1548, name: '山西'},
            { value: 735, name: '晋城' },
            { value: 510, name: '上海' },
            { value: 434, name: '北京' },
            { value: 335, name: '深圳' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
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
