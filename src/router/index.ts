import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

// 創建一個 routes 陣列，定義所有 route 路徑
const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/login"},
  { path: '/123', component: import("@/components/HelloWorld.vue") },
  { path: '/login', component: import("@/pages/headquarters/Login.vue") },
]


// 創建一個router，
const router = createRouter({
  history: createWebHistory(),
  routes // 導入使用上方 routes 所定義的路徑
})

  
// 將 router 物件導出成一個 module
export default router
// https://blog.csdn.net/xjtarzan/article/details/119736309