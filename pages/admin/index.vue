<template>
  <div class="admin-page">
      <section class="new-post">
          <app-button @click="$router.push('/')">Home</app-button>
          <app-button @click="$router.push('/admin/new-post')">Create Post</app-button>
          <app-button @click="onLogout">Logout</app-button>
      </section>
      <section class="existing-posts">
          <h1>Existing Posts</h1>
          <post-list 
            is-admin
            :posts="loadedPosts"
            />
      </section>
  </div>
</template>

<script>
export default { 
  layout: 'admin',
  middleware: ['check-auth','auth'],
  computed: {
    loadedPosts(){
      return this.$store.getters.loadedPosts
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout');
      this.$router.push('/admin/auth');
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'admin.scss'
</style>