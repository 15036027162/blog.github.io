interface GroupItem {
  title: string;
  icon: string;
  desc: string;
  date: string;
  group: string;
}

export const groupItems: GroupItem[] = [
  {
    title: 'Github',
    icon: 'icon-github',
    desc: '不要等待机会，而要创造机会。',
    group: '开源组',
    date: '2021-04-01',
  },
  {
    title: 'Vue',
    icon: 'icon-Vue',
    desc: '现在的你决定将来的你。',
    group: '算法组',
    date: '2021-04-01',
  },
  {
    title: 'Html5',
    icon: 'icon-HTML',
    desc: '没有什么才能比努力更重要。',
    group: '上班摸鱼',
    date: '2021-04-01',
  },
  {
    title: 'Angular',
    icon: 'icon-Angular',
    desc: '热情和欲望可以突破一切难关。',
    group: 'UI',
    date: '2021-04-01',
  },
  {
    title: 'React',
    icon: 'icon-react',
    desc: '健康的身体是实目标的基石。',
    group: '技术牛',
    date: '2021-04-01',
  },
  {
    title: 'Js',
    icon: 'icon-javascript',
    desc: '路是走出来的',
    group: '架构组',
    date: '2021-04-01',
  },
];


interface NavigationItem {
  name: string;
  icon: string;
  path: string;
}

export const navigationItem: NavigationItem[] = [
  {
    name: '工作台',
    icon: 'icon-shouye',
    path: '/home',
  },
  {
    name: '指标管理',
    icon: 'icon-zhibiaochi',
    path: '/chart',
  },
  {
    name: '设备管理',
    icon: 'icon-shebei',
    path: '/manage',
  },
  {
    name: '表单管理',
    icon: 'icon-tianxiebiaodan',
    path: '/table',
  },
  {
    name: '用户管理',
    icon: 'icon-yonghu',
    path: '/role',
  },
  {
    name: '部门管理',
    icon: 'icon-bumen',
    path: '/management',
  },
];
