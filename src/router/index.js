import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import urlSite from '@/constants';

Vue.use(VueRouter);
const routes = [
  {
    path: urlSite.urlHome,
    name: 'home',
    component: Home,
  },
  {
    path: urlSite.urlAbout,
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: urlSite.urlTest,
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../views/test.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
