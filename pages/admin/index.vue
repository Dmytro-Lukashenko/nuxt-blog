<template>
  <div class="admin-page">
      <section class="new-post">
          <button @click="$router.push('/admin/new-post')">Create Post</button>
      </section>
      <section class="existing-posts">
          <h1>Existing Posts</h1>
          <post-list/>
      </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList/PostList'
export default {
  components: {
    PostList
  }
}
</script>

<style lang="sass" scoped>
@import 'admin-main-page-styles.scss'
</style>