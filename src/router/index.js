import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import HomePage from '../pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/allbanksos',
    name: 'AllBankSOS',
    component: () => import('../pages/AllBankSOS.vue')
  },
  {
    path: '/allbankcritical',
    name: 'AllBankCritical',
    component: () => import('../pages/AllBankCritical.vue')
  },
  {
    path: '/allbankmedium',
    name: 'AllBankMedium',
    component: () => import('../pages/AllBankMedium.vue')
  },
  {
    path: '/allbanklow',
    name: 'AllBankLow',
    component: () => import('../pages/AllBankLow.vue')
  },
  {
    path: '/ncrbankdetails',
    name: 'NCRBankDetails',
    component: () => import('../pages/NCRBankDetails.vue')
  },
  {
    path: '/fssbankdetails',
    name: 'FSSBankDetails',
    component: () => import('../pages/FSSBankDetails.vue')
  },
  {
    path: '/ncrfisbankdetails',
    name: 'NCRFISBankDetails',
    component: () => import('../pages/NCRFISBankDetails.vue')
  },
  {
    path: '/cmsbankdetails',
    name: 'CMSBankDetails',
    component: () => import('../pages/CMSBankDetails.vue')
  },
  {
    path: '/ncrbanklivesites',
    name: 'NCRBankLiveSites',
    component: () => import('../pages/NCRBankLiveSites.vue')
  },
  {
    path: '/ncrbanknc30sites',
    name: 'NCRBankNC30Sites',
    component: () => import('../pages/NCRBankNC30Sites.vue')
  },
  {
    path: '/ncrfisbanklivesites',
    name: 'NCRFISBankLiveSites',
    component: () => import('../pages/NCRFISBankLiveSites.vue')
  },
  {
    path: '/ncrfisbanknc30sites',
    name: 'NCRFISBankNC30Sites',
    component: () => import('../pages/NCRFISBankNC30Sites.vue')
  },
  {
    path: '/fssbanklivesites',
    name: 'FSSBankLiveSites',
    component: () => import('../pages/FSSBankLiveSites.vue')
  },
  {
    path: '/fssbanknc30sites',
    name: 'FSSBankNC30Sites',
    component: () => import('../pages/FSSBankNC30Sites.vue')
  },
  {
    path: '/cmsbanklivesites',
    name: 'CMSBankLiveSites',
    component: () => import('../pages/CMSBankLiveSites.vue')
  },
  {
    path: '/cmsbanknc30sites',
    name: 'CMSBankNC30Sites',
    component: () => import('../pages/CMSBankNC30Sites.vue')
  }
  //{
    //path: '/about',
    //name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
