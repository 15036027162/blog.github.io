import { createRouter, createWebHistory } from 'vue-router';
import { useMenuStore } from '@/store/modules/menu';
import Cookies from 'js-cookie';
import { USER_TOKEN } from '@/store/code';

const routes = [  
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录页', keepAlive: false }
  },
  {
    path: '/',
    redirect: '/home',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '工作台', keepAlive: false }
      },
      {
        path: '/chart',
        name: 'Chart',
        component: () => import('@/views/chart/index.vue'),
        meta: { title: '图表', keepAlive: false }
      },
      {
        path: '/table',
        name: 'Table',
        component: () => import('@/views/table/index.vue'),
        meta: { title: '表格管理', keepAlive: false }
      },
      {
        path: '/form',
        name: 'Form',
        component: () => import('@/views/form/index.vue'),
        meta: { title: '表单管理', keepAlive: false }
      },
      {
        path: '/management',
        name: 'Management',
        component: () => import('@/views/system/management.vue'),
        meta: { title: '部门管理', keepAlive: false }
      },
      {
        path: '/role',
        name: 'Role',
        component: () => import('@/views/system/user.vue'),
        meta: { title: '用户管理', keepAlive: false }
      },
      {
        path: '/query',
        name: 'Query',
        component: () => import('@/views/router/query.vue'),
        meta: { title: 'query传参', keepAlive: false }
      },
      {
        path: '/params',
        name: 'Params',
        component: () => import('@/views/router/params.vue'),
        meta: { title: 'params传参', keepAlive: false }
      },
      {
        path: '/routerResult',
        name: 'routerResult',
        component: () => import('@/views/router/index.vue'),
        meta: { title: '参数结果', keepAlive: false }
      },
      {
        path: '/list',
        name: 'list',
        component: () => import('@/views/list/index.vue'),
        meta: { title: '卡片列表', keepAlive: false }
      },
      {
        path: '/manage',
        name: 'Manage',
        component: () => import('@/views/manage/index.vue'),
        meta: { title: '设备管理', keepAlive: false }
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user/index.vue'),
        meta: { title: '个人中心', keepAlive: false }
      },
      {
        path: '/error-page/:id',
        name: 'ErrorPage',
        component: () => import('@/views/error/404.vue'),
        meta: { title: '异常页', keepAlive: false }
      },
      { 
        path: "/:catchAll(.*)", 
        component: () => import('@/views/error/404.vue'),
        meta: { hidden: true } 
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),//你的网站根目录地址
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

/**
 * 路由守卫
 */
router.beforeEach((to, from, next) => {
  const appStore = useMenuStore()
  appStore.changeActiveMenu(to.path)
  if (to.path === '/login' || to.path === '/'){
    next()
  } else {
    const isToken = Cookies.get(USER_TOKEN)
    if (!isToken) {
      next({path: '/login'})
    } else {
      next();
    }
  }
});

/**
 * 路由错误回调
 */
router.onError((handler) => {
  console.log("error:", handler);
});

export default router;
