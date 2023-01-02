export default [
  {
    path: '/event/click',
    name: 'eventClickView',
    component: () => import(/* webpackChunkName: "event", webpackPrefetch: true */ '../views/2_event/EventClickView.vue')
  },
  {
    path: '/event/change',
    name: 'eventChangeView',
    component: () => import(/* webpackChunkName: "event", webpackPrefetch: true */ '../views/2_event/EventChangeView.vue')
  },
  {
    path: '/event/key',
    name: 'eventKeyView',
    component: () => import(/* webpackChunkName: "event", webpackPrefetch: true */ '../views/2_event/EventKeyView.vue')
  }
]
