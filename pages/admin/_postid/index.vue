<template>
  <div class="admin-post-page">
      <section class="update-form">
        <admin-post-form :post="loadedPost" @submit="onSubmitted" />
      </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
    components: {
        AdminPostForm
    },
    layout: 'admin',
    asyncData(context) {
        return axios.get('https://nuxt-blog-37d55-default-rtdb.firebaseio.com/posts/'+ context.params.postid +'.json')
        .then(res => {                    
            return {                
                loadedPost: { ...res.data, id: context.params.postid }
            }
        })
        .catch((e) => context.error(e))
    },
    methods: {
        onSubmitted(editedPost) {        
           this.$store.dispatch("editPost", editedPost)
           .then(() => {
               this.$router.push('/admin')
           })
           
        }
    }
    
}
</script>

<style lang="sass" scoped>
    @import 'postid.scss'
</style>