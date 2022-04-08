<template>
      <ul v-bind="$attrs" class="nav_header" v-on="$listeners">
        <li v-for="({ title, path }, index) of menu" :key="index" class="nav__item">
          <nuxt-link :to="path" class="nav__item_link">
            {{ title }}
          </nuxt-link>
        </li>
      </ul>  
</template>

<script>
export default {
  props: {
    menu: {
      type:Array,
      required: true
    }
  },
    data() {
    return {      
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'NavList.scss'
</style>
