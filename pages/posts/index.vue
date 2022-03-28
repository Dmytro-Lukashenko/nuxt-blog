<template>
  <div class="posts-page">
      <post-list/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList/PostList'
export default {
    components:{
        PostList,
    }
}
</script>

<style lang="sass" scoped>
    @import 'posts.scss'
</style>