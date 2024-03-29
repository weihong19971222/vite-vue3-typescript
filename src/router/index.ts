import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
// import { getCookie } from 'typescript-cookie'

// 創建一個 routes 陣列，定義所有 route 路徑
const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/login"},
  { path: "/shop", component: () => import("@/pages/shop/index.vue")},
  { path: '/login', component: () => import("@/pages/headquarters/Login.vue") },
  { 
    path: '/richmenu',
    component: () => import("@/layout/headquartersSideBar.vue"),
    meta: { 
      requiresHeadquartersAuth: true 
    },
    children: [
      { path: '', component: () => import("@/pages/richmenu/index.vue") },
      // { path: 'storeBranche', component: () => import("@/pages/headquarters/companyManagement/storeBranche/index.vue") },
      // { path: 'fullOrderDiscount', component: () => import("@/pages/headquarters/discountManagement/fullOrderDiscount/index.vue") }
    ]
  },
  { 
    path: '/headquarters',
    component: () => import("@/layout/demoLayout.vue"),
    meta: { 
      requiresHeadquartersAuth: true 
    },
    children: [
      { path: '', component: () => import("@/pages/demo/vueTransitionGroup.vue") },
      // { path: 'storeBranche', component: () => import("@/pages/headquarters/companyManagement/storeBranche/index.vue") },
      // { path: 'fullOrderDiscount', component: () => import("@/pages/headquarters/discountManagement/fullOrderDiscount/index.vue") }
    ]
  }
]


// 創建一個router，
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BU_URL),
  routes // 導入使用上方 routes 所定義的路徑
})

// router.beforeEach((to) => {  // to, from
//   // if ( to.meta.requiresHeadquartersAuth && getCookie('token') === undefined ) {
//   //   return {
//   //     path: '/login',
//   //     query: { redirect: to.fullPath },
//   //   }
//   // }
// })

  
// 將 router 物件導出成一個 module
export default router
// https://blog.csdn.net/xjtarzan/article/details/119736309