<template>
  <form class="new-post-form" @submit.prevent="onSave">
    <app-control-input v-model="editedPost.author" label="Author Name"
      ></app-control-input
    >
    <app-control-input v-model="editedPost.title" label="Title"></app-control-input>
    <app-control-input v-model="editedPost.thumbnail" label="Thumbnail Link"
      ></app-control-input
    >
    <app-control-textarea v-model="editedPost.content" control-type="textarea" label="Content">      
    </app-control-textarea>
    <app-control-textarea v-model="editedPost.previewText" control-type="textarea" label="Preview Text">      
    </app-control-textarea>
    <app-button type="submit" title="Save"></app-button>
    <app-button
      title="Cancel"
      type="button"
      style="margin-left: 10px"
      class="cancel"
      @click="onCancel"      
    >      
    </app-button>
    <app-button
      title="Delete"
      type="button"
      style="margin-left: 10px"
      class="delete"
      @click="onDelete"
    >      
    </app-button>
  </form>
</template>

<script>
export default {  
  props: {
    // eslint-disable-next-line vue/require-default-prop
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: '',
            previewText: '',
          },
    }
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin')
    },
    onDelete() {
      this.$emit('delete', this.editedPost)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'AdminPostForm.scss';
</style>
