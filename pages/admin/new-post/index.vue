<template>
  <div class="admin-new-post-page">
      <section class="new-post-form">
          <form @submit.prevent="onSave">
              <app-control-input v-model="editedPost.author">Author Name</app-control-input>
              <app-control-input v-model="editedPost.title">Title</app-control-input>
              <app-control-input v-model="editedPost.thumbnailLink">Thumbnail Link</app-control-input>
              <app-control-input 
              v-model="editedPost.content"
                control-type="textarea"
                >
                Content</app-control-input>
              <app-button type="submit">Save</app-button>
              <app-button
                type="button"
                style="margin-left: 10px"
                btn-style="cancel"
                @click="onCancel">
                Cancel</app-button>
          </form>
      </section>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput/AppControlInput'
import AppButton from '@/components/UI/AppButton/AppButton'
export default {
    components: {
        AppControlInput,
        AppButton
    },
    data () {
        return {
            editedPost: {
                author: '',
                title: '',
                thumbnailLink: '',
                content: ''
            }
        }
    },
    methods: {
        onSave () {
            // eslint-disable-next-line no-console
            console.log(this.editedPost)
        },
        onCancel () {
            this.$router.push('/admin');
        }
    }
}
</script>

<style>
.admin-new-post-page{
    margin: 0;
}
.new-post-form{
    padding:20px;
}

</style>