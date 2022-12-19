<template>
  <div>
    <!-- 顶部按钮 -->
    <div class="mb-2">
      <a-space>
        <a-button type="primary" @click="visible = true">
          <template #icon>
            <icon-plus />
          </template>
          <template #default>新增</template>
        </a-button>
        <a-button type="primary">
          <template #icon>
            <icon-copy />
          </template>
          <template #default>打印PDF</template>
        </a-button>
      </a-space>
    </div>
    <!-- 弹窗 -->
    <a-modal v-model:visible="visible" @ok="handleSubmit" @cancel="visible = false" ok-text="提交">
      <template #title>新增</template>
      <div>
        <a-form ref="formRef" :model="form" :style="{width:'auto'}" @submit="handleSubmit">
          <a-form-item field="name" label="姓名" validate-trigger="input" :rules="[{required:true, message:'这是必填的'}]">
            <a-input v-model="form.name" placeholder="尊姓大名..." />
          </a-form-item>
          <a-form-item field="address" label="地址" validate-trigger="input" :rules="[{required:true, message:'这是必填的'}]">
            <a-input v-model="form.address" placeholder="来者何处..." />
          </a-form-item>
          <a-form-item field="email" label="电子邮箱" validate-trigger="input" :rules="[{required:true, message:'这是必填的'}]">
            <a-input v-model="form.email" placeholder="师承何处..." />
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
    <!-- 表格组价 -->
    <HomeTable/>
  </div>
</template>
<script lang='ts' setup>
import HomeTable from './components/Table.vue'
import { ref, reactive } from 'vue';

interface formType {
  name: string,
  address: string,
  email: string,
}

const formRef = ref();
const visible = ref(false)

const form: formType = reactive({
  name: '',
  address: '',
  email: ''
})

// 弹框新增
const handleSubmit = async () => {
  const res = await formRef.value?.validate();
  if (res) {
  }
}
</script>
