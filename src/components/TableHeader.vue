<template>
  <div class="tableheader">
    <div class="tableheader-title">
      <span>{{title}}</span>
    </div>
    <div class="tableheader-btn">
      <a-space>
        <a-input v-model="form.conditions" placeholder="请输入搜索条件" allow-clear />
        <a-select v-model="form.status" placeholder="请选择性别">
          <a-option v-for="item of datas.Selection" :value="item.value" :label="item.label" />
        </a-select>
        <a-range-picker v-model="form.time" showTime />
        <a-button type="primary" size="small" v-debounce="[doSearch,'click',500,true]">搜索</a-button>
        <a-button type="primary" size="small" @click="doAdd">新增</a-button>
      </a-space>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { reactive } from "vue";

defineProps({
  title: {
    type: String,
    default: "基本操作"
  }
})

interface conditions {
  conditions: string,
  time: string[],
  status: number | string
}

const datas = reactive({
  Selection: [
    {
      label: '开启', value: 0
    },
    {
      label: '关闭', value: 1
    }
  ]
})

const form:conditions = reactive({
  conditions: "",
  time: [],
  status: 0
})

const emit = defineEmits(['search', 'doAdd'])

const doSearch = ():void => {
  emit('search', form)
}

const doAdd = ():void => {
  emit('doAdd')
}
</script>
<style lang='scss' scoped>
.tableheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--color-neutral-3);
  color: rgb(var(--gray-10));
  .tableheader-title {
    font-weight: 500;
    font-size: 20px;
  }
}
</style>
