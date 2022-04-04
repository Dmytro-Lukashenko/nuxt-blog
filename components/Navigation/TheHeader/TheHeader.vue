<template>
  <div class="container">
    <header class="header">
      <the-side-nav-toggle @toggle="$emit('sidenavToggle')" />
      <div class="header__logo">
        <nuxt-link to="/" class="header__logo_link">WD BLOG</nuxt-link>
      </div>
      <div class="header__spacer" />
      <nav-list         
        :menu="menu" 
      />
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from '../TheSideNavToggle/TheSideNavToggle.vue'
export default {
  components: { TheSideNavToggle },
  data() {
    return {
      menu: [
        {
          title: 'Blog',
          path: '/posts'
        },
        {
          title: 'About',
          path: '/about'
        },
        {
          title: 'Admin',
          path: '/admin'
        },
      ]
    }
  }}
</script>

<style lang="scss" scoped>
@import 'TheHeader.scss'
</style>
