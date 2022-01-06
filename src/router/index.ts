/*
 * @Date: 2022-01-05 17:45:57
 * @LastEditors: 曾令宇
 * @LastEditTime: 2022-01-06 11:07:05
 * @FilePath: /project-enigma/src/router/index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Home = () => import('@/views/Home.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
