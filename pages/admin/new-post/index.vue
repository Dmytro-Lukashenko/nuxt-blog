<template>
  <div class="admin-new-post-page">
      <section class="new-post-form">
          <admin-post-form @submit="onSubmitted"/>
      </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
    components: {
        AdminPostForm
    },
    layout: 'admin',  
    methods: {
        onSubmitted (postData) {
           this.$store.dispatch('addPost', postData)
           .then(() => {
               console.log('ok')
               this.$router.push('/admin');
           });
        },      
    }
}
</script>

<style lang="sass" scoped>
 @import 'new-post.scss'
</style>