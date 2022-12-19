<template>
  <a-page-header title="表单提交" subtitle="副标题" :show-back="false">
    <a-form :model="form" :style="{width:'600px'}" @submit="handleSubmit">
      <a-form-item field="name" label="名称" :rules="[{required:true, message:'这是必填的'}]" :validate-trigger="['change','input']">
        <a-input v-model="form.name" placeholder="请输入你的名称"/>
      </a-form-item>
      <a-form-item field="province" label="下拉框" :rules="[{required:true, message:'必须选择下拉'}]">
        <a-cascader v-model="form.province" :options="options" placeholder="请选择下拉"/>
      </a-form-item>
      <a-form-item field="textarea" label="文本域" :rules="[{required:true, message:'这是必填的'}]">
        <a-textarea v-model="form.textarea" placeholder="请输入文本域" allow-clear/>
      </a-form-item>
      <a-form-item field="isRead">
        <a-checkbox v-model="form.isRead">
          已经阅读过了
        </a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
    {{ form }}
  </a-page-header>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

interface formType {
  name: string,
  province: string,
  textarea: string,
  isRead: boolean
}

const form: formType = reactive({
  name: '',
  province: '',
  textarea: '',
  isRead: true,
})

const options = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'chaoyang',
        label: 'ChaoYang',
        children: [
          {
            value: 'datunli',
            label: 'Datunli',
          },
        ],
      },
      {
        value: 'haidian',
        label: 'Haidian',
      },
      {
        value: 'dongcheng',
        label: 'Dongcheng',
      },
      {
        value: 'xicheng',
        label: 'XiCheng',
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'shanghaishi',
        label: 'Shanghai',
        children: [
          {
            value: 'huangpu',
            label: 'Huangpu',
          },
        ],
      },
    ],
  },
  ]
      

const handleSubmit = (data: any) => {
  // Message.success('ok了', data)
}
</script>
