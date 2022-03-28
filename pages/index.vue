<template> 
  <div class="home-page">
    <section class="intro">
      <h1> Get the latest tech news! </h1>
    </section>     
    <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList/PostList'
export default {
  components: {
    PostList
  },
  computed: {
    loadedPosts(){
      return this.$store.getters.loadedPosts
    }
  }
}
</script>
<style lang="sass" scoped>
@import 'main-index-styles.scss'
</style>
