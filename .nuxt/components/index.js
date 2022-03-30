export const AdminPostForm = () => import('../..\\components\\Admin\\AdminPostForm.vue' /* webpackChunkName: "components/admin-post-form" */).then(c => wrapFunctional(c.default || c))
export const NavigationTheHeader = () => import('../..\\components\\Navigation\\TheHeader\\TheHeader.vue' /* webpackChunkName: "components/navigation-the-header" */).then(c => wrapFunctional(c.default || c))
export const NavigationTheSidenav = () => import('../..\\components\\Navigation\\TheSidenav\\TheSidenav.vue' /* webpackChunkName: "components/navigation-the-sidenav" */).then(c => wrapFunctional(c.default || c))
export const NavigationTheSideNavToggle = () => import('../..\\components\\Navigation\\TheSideNavToggle\\TheSideNavToggle.vue' /* webpackChunkName: "components/navigation-the-side-nav-toggle" */).then(c => wrapFunctional(c.default || c))
export const PostsPostList = () => import('../..\\components\\Posts\\PostList\\PostList.vue' /* webpackChunkName: "components/posts-post-list" */).then(c => wrapFunctional(c.default || c))
export const PostsPostPreview = () => import('../..\\components\\Posts\\PostPreview\\PostPreview.vue' /* webpackChunkName: "components/posts-post-preview" */).then(c => wrapFunctional(c.default || c))
export const UIAppButton = () => import('../..\\components\\UI\\AppButton\\AppButton.vue' /* webpackChunkName: "components/u-i-app-button" */).then(c => wrapFunctional(c.default || c))
export const UIAppControlInput = () => import('../..\\components\\UI\\AppControlInput\\AppControlInput.vue' /* webpackChunkName: "components/u-i-app-control-input" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
