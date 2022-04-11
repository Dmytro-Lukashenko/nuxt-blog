<template>
  <div class="admin">
    <section class="admin__update">
      <admin-post-form
        :post="loadedPost"
        @submit="handlePost('editPost',$event)"
        @delete="handlePost('deletePost',$event)"
      />
    </section>
  </div>
</template>

<script>
import handlePost from '~/mixins/handlePost'
export default {  
  mixins: [handlePost],
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  asyncData(context) {
    return context.app.$axios
      .$get('posts/' + context.params.postid + '.json')
      .then((data) => {
        return {
          loadedPost: { ...data, id: context.params.postid },
        }
      })
      .catch((e) => context.error(e))
  }, 
}
</script>

<style lang="scss" scoped>
.admin{
    margin: 0;
  &__update{
   width: 90%;
   margin: 20px auto;

   @media (min-width: 768px) {       
      width: 500px;     
   }
  }
}

</style>
