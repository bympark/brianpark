import Vue from 'vue';
import Router from 'vue-router';
import Frame from '@/components/Frame';
import Home from '@/components/Home';
import Profile from '@/components/Profile';
import Projects from '@/components/Projects';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Frame',
      component: Frame,
      children: [
        {
          path: 'Home',
          name: 'Home',
          component: Home,
        },
        {
          path: 'Profile',
          name: 'Profile',
          component: Profile,
        },
        {
          path: 'Projects',
          name: 'Projects',
          component: Projects,
        },
      ],
    },
  ],
});
