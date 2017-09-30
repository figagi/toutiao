import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/view/Home'

Vue.use(Router)

export default new Router({
	mode: 'history',
  	routes: [
	    {
	      path: '/',
	      name: 'Hello',
	      component: Hello
	    },
	    {
	    	path: '/home/:type?',
	        component: Home,
	        name: 'home'
	    },
	    // {
	    //     path: '/collect/:kind',
	    //     component: Collect,
	    //     name: 'collect'
	    // },
	    // {
	    //     path: '/care',
	    //     component: Care,
	    //     name: 'care'
	    // },
	    // {
	    //     path: '/my',
	    //     component: My,
	    //     name: 'my'
	    // },
	    // {
	    //     path: '/newsDetail/:id',
	    //     component: Detail,
	    //     name: 'newsdetail'
	    // },
	    // {
	    //     path: '/selfpage',
	    //     component: Selfpage,
	    //     name: 'selfpage'
	    // },
	    // {
	    //     path: '/editprofile',
	    //     component: Editprofile,
	    //     name: 'editprofile'
	    // },
	    // {
	    //     path: '/setup',
	    //     component: Setup,
	    //     name: 'setup'
	    // },
	    {
	        path: '*',
	        redirect: '/home/all?type=__all__'
	    },
	    {
	        path: '',
	        redirect: '/home/all?type=__all__'
	    }
  	]
})

