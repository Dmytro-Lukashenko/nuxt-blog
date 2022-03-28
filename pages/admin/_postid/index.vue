<template>
  <div class="admin-post-page">
      <section class="update-form">
        <admin-post-form :post="loadedPost" />
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
    data () {
        return {
            loadedPost: {
                author: 'Maximillian',
                title: 'My awesome Post',
                content: 'Super amaizing, thanks for that!',
                thumbnailLink: 'https://www.garlicandzest.com/wp-content/uploads/2015/10/irish-mocha-latte-21.jpg'
            }
        }
    }
    
}
</script>

<style>

</style>