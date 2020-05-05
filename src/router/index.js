import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../components/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    redirect: '/login',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
