<template>
  <div class="posts-page">
    <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
import loadedPosts from '@/mixins/loadedPosts.js'

export default {
  mixins: [loadedPosts],
}
</script>

<style lang="scss" scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
