<template>  
  <admin-post-form @submit="onSubmitted" />
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin')
      })
      .catch((e) => console.log(e))
    },
  },
}
</script>


