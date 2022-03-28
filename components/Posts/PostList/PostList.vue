<template>
  <section class="post-list">
      <post-preview
        v-for="post in posts"
        :id="post.id"
        :key="post.id"
        :is-admin="isAdmin"
        :title="post.title"
        :preview-text="post.previewText"
        :thumbnail="post.thumbnail"
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
    },
    // eslint-disable-next-line vue/require-default-prop
    posts:{
      type: Array,
      required: false
    }
  }
}
</script>

<style lang="sass" scoped>
    @import 'PostList.scss'
</style>