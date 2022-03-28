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
export default {
    asyncData(context, callback) {
        // eslint-disable-next-line nuxt/no-timing-in-fetch-data
        setTimeout(() => {
            callback(null, {
                loadedPost: {
                    id:'1',
                    title:"First Post (ID: " + context.route.params.id +")",
                    previewText:'This is our first post',
                    author: 'Maximillian',
                    updatedDate: new Date(),
                    content: 'Some text wich is definitely not the preview text though!',
                    thumbnail:'https://www.garlicandzest.com/wp-content/uploads/2015/10/irish-mocha-latte-21.jpg'
                }
            })
        },1000)
    }
}
</script>

<style lang="sass" scoped>
@import 'post-id-styles.scss'
</style>