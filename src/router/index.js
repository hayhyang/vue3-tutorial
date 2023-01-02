import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about", */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'databindingStringView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/databinding/html',
    name: 'databindingHtmlView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingHTMLView.vue')
  },
  {
    path: '/databinding/input',
    name: 'databindingInputView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingInputView.vue')
  },
  {
    path: '/databinding/select',
    name: 'databindingSelectView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingSelectView.vue')
  },
  {
    path: '/databinding/check',
    name: 'databindingCheckboxView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingCheckboxView.vue')
  },
  {
    path: '/databinding/radio',
    name: 'databindingRadioView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingRadioView.vue')
  },
  {
    path: '/databinding/attr',
    name: 'databindingAttributeView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingAttributeView.vue')
  },
  {
    path: '/databinding/list',
    name: 'databindingListView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: Ïtrue */ '../views/1_databinding/DataBindingListView.vue')
  },
  {
    path: '/databinding/class',
    name: 'databindingClassView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingClassView.vue')
  },
  {
    path: '/databinding/style',
    name: 'databindingStyleView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingStyleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
