<template>
<div>
  <a-carousel
    :autoPlay="true"
    animation-name="card"
    show-arrow="never"
    indicator-position="outer"
    :style="{
      width: '100%',
      height: '240px',
    }">
    <a-carousel-item v-for="image in data.images" :style="{ width: '60%' }">
      <img :src="image" :style="{ width: '100%' }"/>
    </a-carousel-item>
  </a-carousel>
  <a-list>
    <a-list-item v-for="(item, index) in data.list">
      <a-list-item-meta :title="item.title" :description="item.desc" :key="index">
        <template #avatar>
          <a-avatar shape="square">
            <img alt="avatar" :src="item.url" />
          </a-avatar>
        </template>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</div>
</template>
<script lang='ts' setup>
import { reactive } from 'vue';

interface typeData {
  list: any
}

const data = reactive({
  list: [
    {
      title:'这是标题',
      desc: '这是描述',
      url: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'
    },
    {
      title:'这是标题',
      desc: '这是描述',
      url: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'
    },
    {
      title:'这是标题',
      desc: '这是描述',
      url: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'
    },
    {
      title:'这是标题',
      desc: '这是描述',
      url: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'
    }
  ],
  images: [
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
  ],
})
</script>