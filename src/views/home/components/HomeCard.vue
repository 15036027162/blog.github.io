<template>
  <a-row class="mb-5" justify="space-between">
    <a-col :span="5" v-for="(item, index) in datas.listTable">
      <a-card :title="item.title" hoverable :key="index">
        <template #extra>
          <a-tag :color="item.color">{{ item.subtitle }}</a-tag>
        </template>
        <div class="flex justify-between items-center">
          <a-statistic :value="item.number" show-group-separator animation />
          <img :src="item.img" alt="" style="width: 60px; height: 50px" />
        </div>
        <div>{{ item.dataIndex }}</div>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import image1 from '../../../assets/image/hone_1.png';
import image2 from '../../../assets/image/hone_2.png';
import image3 from '../../../assets/image/hone_3.png';
import image4 from '../../../assets/image/hone_4.png';

const datas = reactive({
  listTable: [
    {
      title: '访问量',
      subtitle: '年',
      number: 5670,
      color: 'red',
      key: 'Name',
      dataIndex: '较昨日',
      img: image1,
    },
    {
      title: '成交额',
      subtitle: '月',
      number: 5670,
      color: 'orangered',
      key: 'Name',
      dataIndex: '较昨日',
      img: image2,
    },
    {
      title: '流动人口',
      subtitle: '日',
      number: 5670,
      color: 'orange',
      key: 'Name',
      dataIndex: '较昨日',
      img: image3,
    },
    {
      title: '访问总人数',
      subtitle: '时',
      number: 5670,
      color: 'lime',
      key: 'Name',
      dataIndex: '较昨日',
      img: image4,
    },
  ],
});
</script>
