<template>
  <div class="posts-page">
      <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList/PostList'
export default {
    components:{
        PostList,
    },
    asyncData (context) {    
        return new Promise((resolve, reject) => {
// eslint-disable-next-line nuxt/no-timing-in-fetch-data
        setTimeout(() => {     
            resolve({
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
        }, 1000);
        })
        .then(data => data)
        .catch(e => {
            // eslint-disable-next-line unicorn/error-message
            context.error(new Error()) 
        })
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data    
  },
  mounted() {
      this.$store.dispatch('setPosts')    
  }
}
</script>

<style lang="sass" scoped>
    @import 'posts.scss'
</style>