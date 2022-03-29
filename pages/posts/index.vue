<template>
  <div class="posts-page">
      <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
    middleware: 'log',
    computed: {
      loadedPosts() {
          return this.$store.getters.loadedPosts
      }
  }
}
</script>

<style lang="sass" scoped>
    @import 'posts.scss'
</style>