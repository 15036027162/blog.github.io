<template>
  <div>
    <TableHeader @Search="Search" @doAdd="AddItem"/>
    <div class="table-content">
      <a-table
        :columns="datas.columns"
        :data="datas.datas"
        :pagination="false">
          <template #columns>
            <a-table-column
              v-for="item of datas.columns"
              :key="item.key"
              :title="item.title"
              :width="item.width"
              :align="item.align"
              :data-index="item.key">
              <template v-if="item.key === 'sex'" #cell="{ record }">
                <a-tag :color="record.sex === 1 ? 'green' : 'red'">
                  {{ record.sex === 1 ? '男' : '女' }}
                </a-tag>
              </template>
              <template v-else-if="item.key === 'avatar'" #cell="{ record }">
                <div class="iamge-item">
                  <a-image :src="record.avatar"/>
                </div>
              </template>
              <template v-else-if="item.key === 'actions'" #cell="{ record }">
                <a-space>
                  <a-button type="primary" @click="EditeRow(record)">
                    <template #icon><icon-edit /></template>编辑
                  </a-button>
                  <a-button type="primary" status="danger" @click="DeleteRow(record)">
                    <template #icon><icon-delete /></template>删除
                  </a-button>
                </a-space>
              </template>
            </a-table-column>
          </template>
        </a-table>
    </div>

    <!-- 弹窗 -->
    <a-modal v-model:visible="dialog.visible">
      <template #title>{{dialog.title}}</template>
      <div>
        <a-form :model="datas.Form" @submit="handleOk">
          <a-form-item field="name" label="姓名" :rules="[{required:true,message:'这是必填的'}]" :validate-trigger="['change','input']">
            <a-input v-model="datas.Form.name" placeholder="请输入姓名" />
          </a-form-item>
          <a-form-item field="sex" label="性别" :rules="[{required:true,message:'这是必填的'}]" :validate-trigger="['change','input']">
            <a-select v-model="datas.Form.sex" :style="{width:'320px'}" placeholder="请选择性别">
              <a-option v-for="item of datas.sexType" :value="item.value" :label="item.label" />
            </a-select>
          </a-form-item>
          <a-form-item field="address" label="地址" :rules="[{required:true,message:'这是必填的'}]" :validate-trigger="['change','input']">
            <a-input v-model="datas.Form.address" placeholder="请输入角色编号" />
          </a-form-item>
          <a-form-item field="email" label="邮箱" :rules="[{required:true,message:'这是必填的'}]" :validate-trigger="['change','input']">
            <a-input v-model="datas.Form.email" placeholder="请输入角色描述" />
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
<script lang='ts' setup>
import { reactive } from 'vue';
import { ValidatedError } from '@arco-design/web-vue/es/form/interface';
import TableHeader from '@/components/TableHeader.vue';

const dialog = reactive({
  visible: false,
  title: ''
})

const datas: any = reactive({
  Form: {
    name: '',
    sex: '',
    address: '',
    email: ''
  },
  sexType: [
    {
      value: 1,
      label: '男',
    },
    {
      value: 2,
      label: '女',
    }
  ],
  columns: [
    {
      title: '姓名',
      width: '150',
      align: 'center',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: '性别',
      width: '100',
      align: 'center',
      key: 'sex',
      dataIndex: 'sex',
    },
    {
      title: '地址',
      width: '200',
      align: 'center',
      key: 'address',
      dataIndex: 'address',
    },
    {
      title: '邮箱',
      width: '200',
      align: 'center',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: '头像',
      width: '200',
      align: 'center',
      key: 'avatar',
      dataIndex: 'avatar',
    },
    {
      title: '创建时间',
      width: '200',
      align: 'center',
      key: 'time',
      dataIndex: 'time',
    },
    {
      title: '操作',
      width: '50',
      align: 'center',
      key: 'actions',
      dataIndex: 'actions',
    }
  ],
  datas: [{
    key: '1',
    sex: 1,
    name: 'Jane Doe',
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
    time: '2022-03-29 23:42:27',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210611094Q512b-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651299544&t=8c999496b9759d48c84b81d450f24ad0'
  }, {
    key: '2',
    sex: 2,
    name: 'Alisa Ross',
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
    time: '2022-03-29 23:42:27',
    avatar: 'https://img1.baidu.com/it/u=4020015307,4170910140&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=312'
  }, {
    key: '3',
    sex: 1,
    name: 'Kevin Sandra',
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com',
    time: '2022-03-29 23:42:27',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210611094Q512b-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651299544&t=8c999496b9759d48c84b81d450f24ad0'
  }, {
    key: '4',
    sex: 1,
    name: 'Ed Hellen',
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com',
    time: '2022-03-29 23:42:27',
    avatar: 'https://img1.baidu.com/it/u=4020015307,4170910140&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=312'
  }, {
    key: '5',
    sex: 1,
    name: 'William Smith',
    address: '62 Park Road, London',
    email: 'william.smith@example.com',
    time: '2022-03-29 23:42:27',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210611094Q512b-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651299544&t=8c999496b9759d48c84b81d450f24ad0'
  }]
})

// 搜索
const Search = (data: object):void => {
  console.log(data)
}

// 新增
const AddItem = () => {
  dialog.visible = true;
  Object.keys(datas.Form).forEach(key=>{datas.Form[key]= ''})
}

// 表单编辑
const EditeRow = (record: object) => {
  dialog.visible = true;
  dialog.title = '编辑角色';
  datas.Form = record
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

<style lang='scss' scoped>
.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.iamge-item {
  text-align: center;
  :deep(img) {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
}
</style>
