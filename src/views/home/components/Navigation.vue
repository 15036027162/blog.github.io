<template>
  <a-card title="快捷导航" hoverable :bordered="false" class="mb-7">
    <a-card-grid
      v-for="item in dataList.list"
      :key="item.name"
      :hoverable="true"
      class="w-1/3"
    >
      <a-card class="px-16px py-6px" :bordered="false">
        <div class="text-center" @click="navigater(item)">
          <div class="mb-3">
            <svg class="icon svg-icon h-12 w-7" aria-hidden="true">
              <use :xlink:href="`#${item.icon}`"></use>
            </svg>
          </div>
          <div class="text-size-[16px] font-bold line-through-[40px] flex justify-center items-center">
            <span class="text-size-[14px]">{{ item.name }}</span>
          </div>
        </div>
      </a-card>
    </a-card-grid>
  </a-card>
</template>

<script setup lang="ts">
import { navigationItem } from '@/mock/home-data';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useMenuStore } from '@/store';

const router = useRouter();
const appStore = useMenuStore();

const dataList = reactive({
  list: navigationItem,
});

const navigater = (item: any) => {
  router.push(item.path);
  appStore.addTagIten(item);
};
</script>
