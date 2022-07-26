import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [

  {
    path: '/Login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/Register',
    component: () => import('@/views/login/register'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }

]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [

  {
    path: '/',
    component: Layout,
    redirect: '/Home',
    meta: {
      title: '主页',
      icon: 'form'
    },
    children: [
      {
        path: 'Home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: 'HomePage', icon: 'el-icon-s-home' }
      }
    ]
  },

  {
    path: '/Work',
    name: '管理',
    component: Layout,
    hidden: false,
    meta: { title: '管理', icon: 'el-icon-user-solid' },
    children: [
      {
        path: 'WorkSpace',
        name: 'WorkSpace',
        component: () => import('@/views/work/workspace'),
        meta: { title: 'WorkSpace', icon: 'el-icon-user-solid' }
      },
      {
        path: 'ShowBoard',
        name: 'ShowBoard',
        component: () => import('@/views/work/showborad'),
        meta: { title: 'ShowBoard', icon: 'el-icon-s-marketing' }
      }
    ]
  },

  {
    path: '/test',
    name: 'Test',
    component: Layout,
    hidden: false,
    meta: { title: 'Test', icon: 'el-icon-s-home' },
    children: [
      {
        path: 'time',
        name: 'time',
        component: () => import('@/views/test/time'),
        meta: { title: 'test', icon: 'el-icon-s-home' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
