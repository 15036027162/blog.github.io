<template>
  <a-layout-header class="py-0 px-3 flex justify-between">
    <a-space class="system-head" size="medium">
      <a-tooltip content="收缩栏" position="bottom">
        <a-button shape="round" @click="onCollapse">
          <IconCaretRight v-if="collapsed" />
          <IconCaretLeft v-else />
        </a-button>
      </a-tooltip>
      <BreadcrumbView/>
    </a-space>

    <a-space class="system-head" size="medium">
      <!-- 全屏 -->
      <a-tooltip :content="isFullscreen? '关闭全屏':'全屏'" position="bottom">
        <a-button size="round" @click="changeScreen">
          <IconFullscreen/>
        </a-button>
      </a-tooltip>

      <!-- 消息通知 -->
      <a-popover trigger="click">
        <a-button>
          <a-badge :count="9">
            <IconNotification/>
          </a-badge>
        </a-button>
        <template #content>
          <a-tabs>
            <a-tab-pane key="1">
              <template #title>
                <icon-calendar/> 消息
              </template>
              <a-list>
                <a-list-item>
                  <a-list-item-meta title="来自星星的微信" description="今晚约吗.">
                    <template #avatar>
                      <a-avatar shape="square">
                        <img alt="avatar" src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
                      </a-avatar>
                    </template>
                  </a-list-item-meta>
                </a-list-item>
              </a-list>
            </a-tab-pane>
          </a-tabs>
          <a-row class="mt-5" :gutter="24">
            <a-col :span="12" style="text-align: center;">
              <a-button type="primary">全部已读</a-button>
            </a-col>
            <a-col :span="12" style="text-align: center;">
              <a-button type="primary">查看更多</a-button>
            </a-col>
          </a-row>
        </template>
      </a-popover>

      <!-- 主题切换 -->
      <a-tooltip content="主题切换" position="bottom">
        <a-button size="round" @click="changeTheme">
          <IconSunFill v-if="Themeflag" />
          <IconMoonFill v-else/>
        </a-button>
      </a-tooltip>

      <!-- 设置面板 -->
      <a-tooltip content="设置" position="bottom">
        <a-button size="round" @click="changeSettings">
          <icon-settings />
        </a-button>
      </a-tooltip>

      <!-- 退出登录 -->
      <a-dropdown trigger="hover">
          <a-button>曹永<icon-down/></a-button>
          <template #content>
            <a-doption @click="userCenter()">个人中心</a-doption>
            <a-doption @click="loginOut()">退出登录</a-doption>
          </template>
          <a-avatar>
            <img alt="avatar" src="../../assets/image/ava.webp"/>
          </a-avatar>
      </a-dropdown>
    </a-space>

    <SettingPanel v-show="settingsFlag" />
  </a-layout-header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { IconCaretRight, IconCaretLeft, IconSunFill, IconMoonFill, IconFullscreen, IconNotification } from '@arco-design/web-vue/es/icon';
import BreadcrumbView from '../breadcrumb/index.vue';
import SettingPanel from './components/settingPanel.vue';
import { useMenuStore, userStore } from '@/store';
import { useRouter } from 'vue-router';
import { Modal } from '@arco-design/web-vue';

// 全屏
import { useFullScreen } from '@/hooks/index';
const { isFullscreen, changeScreen } = useFullScreen();

const appStore = useMenuStore();
const appUser = userStore();

const router = useRouter();

const collapsed = ref(false);
const Themeflag = ref(true);
const settingsFlag = ref(true);

// 收缩栏
const onCollapse = () => {
  appStore.changeCollapsed(collapsed.value);
};

// 打开面板
const changeSettings = () => {
  appStore.changeSettingDawe(settingsFlag.value);
};

// 切换主题
const changeTheme = () => {
  Themeflag.value = !Themeflag.value;
  if (!Themeflag.value) {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    document.body.removeAttribute('arco-theme');
  }
}

// 个人中心
const userCenter = () => {
  router.push('/user');
}

// 退出登录
const loginOut = () => {
  Modal.warning({
    title: '提示',
    content: '确认退出登录？',
    hideCancel: false,
    onOk: () => {
      appUser.logoutUser().then(() => {
        router.replace('/login')
      })
    }
  })
}
</script>
