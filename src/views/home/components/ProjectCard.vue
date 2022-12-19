<template>
  <a-card title="项目" :bordered="false" class="mb-8">
    <a-card-grid
      v-for="(item, index) in dataList.list"
      :key="item.date"
      :hoverable="true"
      :style="{ width: '33%' }">
      <a-card class="card-demo" :bordered="false">
        <div class="card-content">
          <div class="text-size-[20px] font-bold flex items-center mb-2">
            <svg class="icon w-8 h-8 mr-3" aria-hidden="true">
              <use :xlink:href="`#${item.icon}`"></use>
            </svg>
            <span style="line-height: 40px">{{ item.title }}</span>
          </div>
          <div class="card-desc text-size-[14px] mb-2">{{ item.desc }}</div>
          <div class="flex justify-between items-center">
            <span>{{ item.group }}</span>
            <span>{{ item.date }}</span>
          </div>
        </div>
      </a-card>
    </a-card-grid>
  </a-card>
</template>

<script setup lang="ts">
import { groupItems } from '@/mock/home-data';
import { reactive } from 'vue';

const dataList = reactive({
  list: groupItems,
});
</script>
