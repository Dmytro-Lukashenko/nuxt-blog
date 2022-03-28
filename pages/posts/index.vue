<template>
  <div class="posts-page">
      <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList/PostList'
export default {
    components:{
        PostList,
    },    
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