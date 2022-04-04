<template>
  <div class="sidenav__container">
    <div
        v-if="show"
        class="sidenav-backdrop"
        @click="$emit('close')">
    </div>
    <transition name="slide-side">
    <div
          v-if="show"
          class="sidenav">
      <nav-list 
        :menu="menu" 
        class="nav_sidebar"
        @click="$emit('close')"
      />
    </div> 
    </transition>
  </div>
 
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
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
  }
};
</script>

<style lang="scss" scoped>
@import 'TheSidenav.scss'
</style>
