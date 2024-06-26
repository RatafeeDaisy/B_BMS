import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import huiyuanleixingList from '../pages/huiyuanleixing/list'
import huiyuanleixingDetail from '../pages/huiyuanleixing/detail'
import huiyuanleixingAdd from '../pages/huiyuanleixing/add'
import huiyuanList from '../pages/huiyuan/list'
import huiyuanDetail from '../pages/huiyuan/detail'
import huiyuanAdd from '../pages/huiyuan/add'
import fangjianleixingList from '../pages/fangjianleixing/list'
import fangjianleixingDetail from '../pages/fangjianleixing/detail'
import fangjianleixingAdd from '../pages/fangjianleixing/add'
import fangjianxinxiList from '../pages/fangjianxinxi/list'
import fangjianxinxiDetail from '../pages/fangjianxinxi/detail'
import fangjianxinxiAdd from '../pages/fangjianxinxi/add'
import zhoubiansheshiList from '../pages/zhoubiansheshi/list'
import zhoubiansheshiDetail from '../pages/zhoubiansheshi/detail'
import zhoubiansheshiAdd from '../pages/zhoubiansheshi/add'
import yudingjiluList from '../pages/yudingjilu/list'
import yudingjiluDetail from '../pages/yudingjilu/detail'
import yudingjiluAdd from '../pages/yudingjilu/add'
import ruzhujiluList from '../pages/ruzhujilu/list'
import ruzhujiluDetail from '../pages/ruzhujilu/detail'
import ruzhujiluAdd from '../pages/ruzhujilu/add'
import pingjiajiluList from '../pages/pingjiajilu/list'
import pingjiajiluDetail from '../pages/pingjiajilu/detail'
import pingjiajiluAdd from '../pages/pingjiajilu/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'huiyuanleixing',
					component: huiyuanleixingList
				},
				{
					path: 'huiyuanleixingDetail',
					component: huiyuanleixingDetail
				},
				{
					path: 'huiyuanleixingAdd',
					component: huiyuanleixingAdd
				},
				{
					path: 'huiyuan',
					component: huiyuanList
				},
				{
					path: 'huiyuanDetail',
					component: huiyuanDetail
				},
				{
					path: 'huiyuanAdd',
					component: huiyuanAdd
				},
				{
					path: 'fangjianleixing',
					component: fangjianleixingList
				},
				{
					path: 'fangjianleixingDetail',
					component: fangjianleixingDetail
				},
				{
					path: 'fangjianleixingAdd',
					component: fangjianleixingAdd
				},
				{
					path: 'fangjianxinxi',
					component: fangjianxinxiList
				},
				{
					path: 'fangjianxinxiDetail',
					component: fangjianxinxiDetail
				},
				{
					path: 'fangjianxinxiAdd',
					component: fangjianxinxiAdd
				},
				{
					path: 'zhoubiansheshi',
					component: zhoubiansheshiList
				},
				{
					path: 'zhoubiansheshiDetail',
					component: zhoubiansheshiDetail
				},
				{
					path: 'zhoubiansheshiAdd',
					component: zhoubiansheshiAdd
				},
				{
					path: 'yudingjilu',
					component: yudingjiluList
				},
				{
					path: 'yudingjiluDetail',
					component: yudingjiluDetail
				},
				{
					path: 'yudingjiluAdd',
					component: yudingjiluAdd
				},
				{
					path: 'ruzhujilu',
					component: ruzhujiluList
				},
				{
					path: 'ruzhujiluDetail',
					component: ruzhujiluDetail
				},
				{
					path: 'ruzhujiluAdd',
					component: ruzhujiluAdd
				},
				{
					path: 'pingjiajilu',
					component: pingjiajiluList
				},
				{
					path: 'pingjiajiluDetail',
					component: pingjiajiluDetail
				},
				{
					path: 'pingjiajiluAdd',
					component: pingjiajiluAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
