<template>
  <div class="single-post-page">
      <section class="post">
          <h1>{{ loadedPost.title }}</h1>
          <div class="post-details">
              <div>Last updated on {{ loadedPost.updatedDate | date }}</div> 
              <div>Written by {{ loadedPost.author }}</div>
          </div>
          <p>{{ loadedPost.content }}</p>
      </section>
      <section class="post-feedback">
          <p>Let me know what you think about the post, send a mail to <a href="mailto:d.a.lukashenko@gmail.com">d.a.lukashenko@gmail.com</a></p>
      </section>
  </div>
</template>

<script>
export default {
    asyncData(context) {
        return context.app.$axios.$get('posts/' + context.params.id + '.json')
        .then(data => {
            return {
                loadedPost: data
            }
        })
        .catch((e) => context.error(e))
    }
}
</script>

<style lang="sass" scoped>
@import 'post-id-styles.scss'
</style>