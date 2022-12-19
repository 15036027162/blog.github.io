<template>
  <div class="w-full flex justify-center items-center">
    <div class="mt-12 text-center">
      <a-card class="w-96" title="params传参">
        <a-input v-model="parameter" placeholder="请输入参数" allow-clear />
        <a-button type="primary" style="width: 100%; margin-top: 20px;"  @click="jump">
          <template #default>跳转</template>
        </a-button>
      </a-card>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const parameter = ref('')

const jump = () => {
  // 命名的路由 params传参
  router.push(
    { 
      name: 'routerResult', 
      params: { id: parameter.value }
    }
  )
}
</script>
