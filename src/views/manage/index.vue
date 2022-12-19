<template>
  <a-row class="grid-demo" :gutter="24">
    <a-col :span="6">
      <a-card class="card-left" title="设备列表">
        <a-tree
          :default-selected-keys="['0-0-1']"
          :data="treeData"
          :show-line="true"
        />
      </a-card>
    </a-col>
    <a-col :span="18">
      <a-card class="w-full" title="设备查看">
        <div class="flex justify-between items-center mb-5">
          <div class="card-right-tooler-left">
            <a-button type="primary">新增</a-button>
          </div>
          <div class="card-right-tooler-right">
            <a-space>
              <a-select :style="{width:'160px'}" placeholder="Please select ..." allow-clear>
                <a-option>Beijing</a-option>
                <a-option>Shanghai</a-option>
                <a-option>Guangzhou</a-option>
                <a-option disabled>Disabled</a-option>
              </a-select>
              <a-input-search :style="{width:'320px'}" placeholder="Please enter something"/>
            </a-space>
          </div>
        </div>
        <div class="card-right-table">
          <a-table
            :columns="datas.columns"
            :data="datas.datas"
            :pagination="false"
            :bordered="{cell:true}">
            <template #columns>
              <a-table-column title="Name" data-index="name"></a-table-column>
              <a-table-column title="Salary" data-index="salary"></a-table-column>
              <a-table-column title="Address" data-index="address"></a-table-column>
              <a-table-column title="Email" data-index="email"></a-table-column>
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
      </a-card>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
  import { ref, reactive } from 'vue';

  const treeData = [
    {
      title: 'Trunk 1',
      key: '0-0',
      children: [
        {
          title: 'Trunk 1-0',
          key: '0-0-0',
          children: [
            { title: 'leaf', key: '0-0-0-0' },
            {
              title: 'leaf',
              key: '0-0-0-1',
              children: [{ title: 'leaf', key: '0-0-0-1-0' }],
            },
            { title: 'leaf', key: '0-0-0-2' },
          ],
        },
        {
          title: 'Trunk 1-1',
          key: '0-0-1',
        },
        {
          title: 'Trunk 1-2',
          key: '0-0-2',
          children: [
            { title: 'leaf', key: '0-0-2-0' },
            {
              title: 'leaf',
              key: '0-0-2-1',
            },
          ],
        },
      ],
    },
    {
      title: 'Trunk 2',
      key: '0-1',
    },
    {
      title: 'Trunk 3',
      key: '0-2',
      children: [
        {
          title: 'Trunk 3-0',
          key: '0-2-0',
          children: [
            { title: 'leaf', key: '0-2-0-0' },
            { title: 'leaf', key: '0-2-0-1' },
          ],
        },
      ],
    },
  ];

  const datas = reactive({
    size:'medium',
    columns: [
      {
        title: 'Name',
        key: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Salary',
        key: 'Salary',
        dataIndex: 'salary',
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
    datas: []
  })
</script>
>