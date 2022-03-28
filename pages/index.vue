<template> 
  <div class="home-page">
    <section class="intro">
      <h1> Get the latest tech news! </h1>
    </section>     
    <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList/PostList'
export default {
  components: {
    PostList
  },
  asyncData (context, callback) {        
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
        {
          id:'1',
          title:'First Post',
          previewText:'This is our first post',
          thumbnail:'https://www.garlicandzest.com/wp-content/uploads/2015/10/irish-mocha-latte-21.jpg'
        },
        {
          id:'2',
          title:'Second Post',
          previewText:'This is our second post',
          thumbnail:'https://www.garlicandzest.com/wp-content/uploads/2015/10/irish-mocha-latte-21.jpg'
        },
        {
          id:'3',
          title:'Third Post',
          previewText:'This is our third post',
          thumbnail:'https://www.garlicandzest.com/wp-content/uploads/2015/10/irish-mocha-latte-21.jpg'
        }
      ]
    });
  }, 1500);
  }, 
}
</script>
<style lang="sass" scoped>
@import 'main-index-styles.scss'
</style>
