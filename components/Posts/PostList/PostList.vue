<template>
  <section class="post-list">
      <post-preview
        :is-admin="isAdmin"
        id="1"
        title="Hello there!"
        preview-text="This is my first post"
        thumbnail="https://www.garlicandzest.com/wp-content/uploads/2015/10/irish-mocha-latte-21.jpg"
      />
    </section>  
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin:{
      type:Boolean,      
      default:false
    }
  }
}
</script>

<style lang="sass" scoped>
    @import 'PostList.scss'
</style>