<template>
  <div class="single-post-page">
      <section class="post">
          <h1>{{ loadedPost.title }}</h1>
          <div class="post-details">
              <div>Last updated on {{ loadedPost.updatedDate }}</div>
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
import axios from 'axios'
export default {
    asyncData(context) {
        return axios.get('https://nuxt-blog-37d55-default-rtdb.firebaseio.com/posts/' + context.params.id + '.json')
        .then(res => {
            return {
                loadedPost: res.data
            }
        })
        .catch((e) => context.error(e))
    }
}
</script>

<style lang="sass" scoped>
@import 'post-id-styles.scss'
</style>