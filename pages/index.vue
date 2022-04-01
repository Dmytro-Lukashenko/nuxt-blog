<template> 
  <div>
    <section class="intro">
      <h1> Get the latest tech news about VueJS & NUXTjs awesome frameworks! </h1>
    </section>     
    <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
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
