<template>
  <div>
    <a-result status="403">
      <template #extra>
        <div class="text" v-if="state.queryid">Query参数: {{state.queryid}}</div>
        <div class="text" v-if="state.paramsid">params参数: {{state.paramsid}}</div>
        <div class="text" v-if="!state.queryid && !state.paramsid">暂无参数</div>
        <a-space>
          <a-button type="primary" @click="backPage">返回</a-button>
        </a-space>
      </template>
      <a-alert type="warning" closable>
        <template #title>
          提示
        </template>
        和vue2一样, useRouter（跳转）, useRoute（获取路由参数）
      </a-alert>
    </a-result>
  </div>
</template>
<script lang='ts' setup>
import { useRoute, useRouter } from "vue-router";
import { reactive } from "vue";

// 定义router变量
const route = useRoute()
const router = useRouter()

const state = reactive({
  queryid: route.query.id,  // query
  paramsid: route.params.id  // params
})

// 返回
const backPage = () => {
  router.back()
}

</script>
<style lang='scss' scoped>
.text {
  line-height: 50px;
}
</style>
