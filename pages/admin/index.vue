<template>
  <div class="admin-page">
    <section class="admin-page__new-post">
      <app-button @click="$router.push('/')"></app-button>
      <app-button title="Create Post" @click="$router.push('/admin/new-post')"
        ></app-button
      >
      <app-button title="Logout" @click="onLogout"></app-button>
    </section>
    <section class="admin-page__posts">
      <h1>Existing Posts</h1>
      <post-list is-admin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import loadedPosts from '@/mixins/loadedPosts.js'

export default {
  mixins: [loadedPosts],
  layout: 'admin',
  middleware: ['check-auth', 'auth'], 
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>

.admin-page {
  padding: 20px;

  &__new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
  }

  &__posts {
    text-align: center;
  }

}
</style>
