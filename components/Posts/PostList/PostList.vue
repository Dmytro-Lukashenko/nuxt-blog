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

export default {  
  props: {
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
    // eslint-disable-next-line vue/require-default-prop
    posts: {
      type: Array,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'PostList.scss'
</style>
