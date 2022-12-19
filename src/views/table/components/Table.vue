<template>
  <div>
    <a-table
    :columns="datas.columns"
    :data="datas.datas"
    :pagination="false"
    :bordered="{cell:true}">
      <template #columns>
        <a-table-column title="姓名" data-index="name"></a-table-column>
        <a-table-column title="地址" data-index="address"></a-table-column>
        <a-table-column title="邮箱" data-index="email"></a-table-column>
        <a-table-column title="操作"  width="100">
          <template #cell="{ record }">
            <a-space>
              <a-button type="primary">编辑</a-button>
              <a-button type="primary" status="danger">删除</a-button>
            </a-space>
          </template>
        </a-table-column>
      </template>
    </a-table>
    <a-pagination :total="50" :size="datas.size" show-total show-page-size/>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
const datas = reactive({
  size:'medium',
  columns: [
    {
      title: 'Name',
      key: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Address',
      key: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Email',
      key: 'Email',
      dataIndex: 'email',
    }
  ],
  datas: [{
    key: '1',
    name: 'Jane Doe',
    address: '32 Park Road, London',
    email: 'jane.doe@example.com'
  }, {
    key: '2',
    name: 'Alisa Ross',
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com'
  }, {
    key: '3',
    name: 'Kevin Sandra',
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com'
  }, {
    key: '4',
    name: 'Ed Hellen',
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com'
  }, {
    key: '5',
    name: 'William Smith',
    address: '62 Park Road, London',
    email: 'william.smith@example.com'
  }]
})
</script>
