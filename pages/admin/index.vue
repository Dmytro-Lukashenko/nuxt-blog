<template>
  <div class="admin-page">
      <section class="new-post">
          <app-button @click="$router.push('/admin/new-post')">Create Post</app-button>
      </section>
      <section class="existing-posts">
          <h1>Existing Posts</h1>
          <post-list 
            is-admin
            :posts="loadedPosts"
            />
      </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList/PostList'
import AppButton from '@/components/UI/AppButton/AppButton'
export default {
  components: {
    PostList,
    AppButton
  },
  layout: 'admin',
  computed: {
    loadedPosts(){
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'admin.scss'
</style>