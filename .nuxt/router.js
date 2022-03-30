import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e64c6752 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _2086df55 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _3466a75e = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _5b41b0ed = () => interopDefault(import('..\\pages\\admin\\auth\\index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _2df30748 = () => interopDefault(import('..\\pages\\admin\\new-post\\index.vue' /* webpackChunkName: "pages/admin/new-post/index" */))
const _502c3b45 = () => interopDefault(import('..\\pages\\admin\\_postid\\index.vue' /* webpackChunkName: "pages/admin/_postid/index" */))
const _3360a92e = () => interopDefault(import('..\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _4caf4ee0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _e64c6752,
    name: "about"
  }, {
    path: "/admin",
    component: _2086df55,
    name: "admin"
  }, {
    path: "/posts",
    component: _3466a75e,
    name: "posts"
  }, {
    path: "/admin/auth",
    component: _5b41b0ed,
    name: "admin-auth"
  }, {
    path: "/admin/new-post",
    component: _2df30748,
    name: "admin-new-post"
  }, {
    path: "/admin/:postid",
    component: _502c3b45,
    name: "admin-postid"
  }, {
    path: "/posts/:id",
    component: _3360a92e,
    name: "posts-id"
  }, {
    path: "/",
    component: _4caf4ee0,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
