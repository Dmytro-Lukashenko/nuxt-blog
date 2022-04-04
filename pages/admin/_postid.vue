<template>
  <div class="admin">
    <section class="admin__update">
      <admin-post-form
        :post="loadedPost"
        @submit="onSubmitted"
        @delete="onDeleted"
      />
    </section>
  </div>
</template>

<script>
export default {
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
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost).then(() => {
        this.$router.push('/admin')
      })
      .catch((e) => console.log(e))
    },
    onDeleted(editedPost) {
      this.$store.dispatch('deletePost', editedPost).then(() => {        
        this.$router.push('/admin')
      })
      .catch((e) => console.log(e))
    },
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
