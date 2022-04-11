<template>  
  <admin-post-form @submit="handlePost('addPost',$event)" />
</template>

<script>
import handlePost from '~/mixins/handlePost'
export default {
  mixins: [handlePost],
  layout: 'admin',
  middleware: ['check-auth', 'auth'],  
}
</script>


