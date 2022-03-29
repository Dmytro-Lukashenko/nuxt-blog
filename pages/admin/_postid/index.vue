<template>
  <div class="admin-post-page">
      <section class="update-form">
        <admin-post-form :post="loadedPost" @submit="onSubmitted" />
      </section>
  </div>
</template>

<script>
export default {   
    layout: 'admin',
    middleware: ['check-auth','auth'],
    asyncData(context) {
        return context.app.$axios.$get('posts/'+ context.params.postid +'.json')
        .then(data => {                    
            return {                
                loadedPost: { ...data, id: context.params.postid }
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