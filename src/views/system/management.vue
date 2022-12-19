<!-- 部门管理 -->

<template>
  <div>
    <TableHeader @search="search" @doAdd="AddItem"/>
    <a-table :pagination="false" :columns="datas.columns" :data="datas.data">
      <template #columns>
        <a-table-column title="部门名称" data-index="name"></a-table-column>
        <a-table-column title="部门编码" data-index="salary"></a-table-column>
        <a-table-column title="部门地址" data-index="address" width="200"></a-table-column>
        <a-table-column title="状态" width="100">
          <template #cell="{ record }">
            <a-switch v-model="record.status" size="medium" :checked-value="1" :unchecked-value="0">
              <template #checked>正常</template>
              <template #unchecked>禁用</template>
            </a-switch>
          </template>
        </a-table-column>
        <a-table-column title="操作" width="100">
          <template #cell="{ record }">
            <a-space>
              <a-button type="primary" @click="EditeRow(record)">
                <template #icon><icon-edit /></template>编辑
              </a-button>
              <a-button type="primary" status="danger">
                <template #icon><icon-delete /></template>删除
              </a-button>
            </a-space>
          </template>
        </a-table-column>
      </template>
    </a-table>

    <!-- 弹窗 -->
    <a-modal v-model:visible="dialog.visible">
      <template #title>{{dialog.title}}</template>
      <div>
        <a-form :model="datas.Form" @submit="handleOk">
          <a-form-item field="name" label="部门名称" :rules="[{required:true,message:'这是必填的'}]" :validate-trigger="['change','input']">
            <a-input v-model="datas.Form.name" placeholder="请输入部门名称" />
          </a-form-item>
          <a-form-item field="superior" label="上级部门" :rules="[{required:true,message:'这是必填的'}]" :validate-trigger="['change','input']">
            <a-select v-model="datas.Form.superior" :style="{width:'320px'}" placeholder="请选择上级部门">
              <a-option v-for="item of datas.sexType" :value="item.value" :label="item.label" />
            </a-select>
          </a-form-item>
          <a-form-item field="address" label="部门地址" :rules="[{required:true,message:'这是必填的'}]" :validate-trigger="['change','input']">
            <a-input v-model="datas.Form.address" placeholder="请输入部门地址" />
          </a-form-item>
          <a-form-item field="status" label="状态" :rules="[{required:true,message:'这是必填的'}]" :validate-trigger="['change','input']">
            <a-select v-model="datas.Form.status" :style="{width:'320px'}" placeholder="请选择当前状态">
              <a-option v-for="item of datas.sexType" :value="item.value" :label="item.label" />
            </a-select>
          </a-form-item>
        </a-form>
      </div>
      <template #footer>
        <a-space>
          <a-button type="primary" html-type="submit" @click="handleOk">确认注册</a-button>
        </a-space>
      </template>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { ValidatedError } from '@arco-design/web-vue/es/form/interface';
import TableHeader from '@/components/TableHeader.vue';

const dialog = reactive({
  visible: false,
  title: ''
})

// 编辑
const EditeRow = (record: object) => {
  dialog.visible = true;
  datas.Form = record;
  dialog.title = '编辑部门'
}

// 新增
const AddItem = () => {
  datas.Form = {};
  dialog.visible = true;
  dialog.title = '新增部门'
}

const datas: any = reactive({
  Form: {
    name: '',
    superior: '',
    address: '',
    status: ''
  },
  columns: [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ],
  data: [{
    key: '1',
    name: '软件开发',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
    status: 1,
    children: [
      {
        key: '2',
        name: '研发',
        salary: 25000,
        address: '35 Park Road, London',
        email: 'alisa.ross@example.com',
        children: [
          {
            key: '3',
            name: '前端',
            salary: 17000,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com'
          }, {
            key: '4',
            name: '后端',
            salary: 27000,
            address: '62 Park Road, London',
            email: 'william.smith@example.com'
          }
        ]
      },
      {
        key: '5',
        name: '测试',
        salary: 25000,
        address: '35 Park Road, London',
        email: 'alisa.ross@example.com'
      }
    ]
  }, {
    key: '6',
    name: 'UI设计',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
    status: 1
  }, {
    key: '7',
    name: '市场营销',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com'
  }, {
    key: '8',
    name: '政务公关',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com'
  }, {
    key: '9',
    name: '实施维护',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com'
  },{
    key: '9',
    name: '实施维护',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com'
  },{
    key: '9',
    name: '实施维护',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com'
  },{
    key: '9',
    name: '实施维护',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com'
  },{
    key: '9',
    name: '实施维护',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com'
  },{
    key: '9',
    name: '实施维护',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com'
  },{
    key: '9',
    name: '实施维护',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com'
  }]
})

// 搜索
const search = (data: object):void => {
  console.log(data)
}

const handleOk = async ({errors}: {
  errors: Record <string, ValidatedError> | undefined;
}) => {
  console.log(datas.Form)
  if (!errors) {
    setTimeout(() => {
      try {
      } catch (err) {
      } finally {
      }
    }, 1000);
  }
}
</script>
