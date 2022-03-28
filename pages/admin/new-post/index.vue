<template>
  <div class="admin-new-post-page">
      <section class="new-post-form">
          <admin-post-form/>
      </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
    components: {
        AdminPostForm
    },
    layout: 'admin'    
}
</script>

<style lang="sass" scoped>
 @import 'new-post.scss'
</style>