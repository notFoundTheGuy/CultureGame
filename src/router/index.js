import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import page3 from '@/components/page3'
import page4 from '@/components/page4'
import page5 from '@/components/page5'
import page6 from '@/components/page6'
import page7 from '@/components/page7'
import page8 from '@/components/page8'
import page9 from '@/components/page9'
import page10 from '@/components/page10'
import page11 from '@/components/page11'
import page12 from '@/components/page12'
import right from '@/components/right'
import score from '@/components/score'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page1',
      component: page1
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    },
    {
      path: '/page3',
      name: 'page3',
      component: page3
    },
    {
      path: '/page4',
      name: 'page4',
      component: page4
    },
    {
      path: '/page5',
      name: 'page5',
      component: page5
    },
    {
      path: '/page6',
      name: 'page6',
      component: page6
    },
    {
      path: '/page7',
      name: 'page7',
      component: page7
    },
    {
      path: '/page8',
      name: 'page8',
      component: page8
    },
    {
      path: '/page9',
      name: 'page9',
      component: page9
    },
    {
      path: '/page10',
      name: 'page10',
      component: page10
    },
    {
      path: '/page11',
      name: 'page11',
      component: page11
    },
    {
      path: '/page12',
      name: 'page12',
      component: page12
    },
    {
      path: '/right',
      name: 'right',
      component: right
    },
    {
      path: '/score',
      name: 'score',
      component: score
    }
  ]
})
