<template>
  <form class="new-post-form" @submit.prevent="onSave">
    <app-control-input v-model="editedPost.author"
      >Author Name</app-control-input
    >
    <app-control-input v-model="editedPost.title">Title</app-control-input>
    <app-control-input v-model="editedPost.thumbnail"
      >Thumbnail Link</app-control-input
    >
    <app-control-input v-model="editedPost.content" control-type="textarea">
      Content
    </app-control-input>
    <app-control-input v-model="editedPost.previewText" control-type="textarea">
      Preview Text
    </app-control-input>
    <app-button type="submit">Save</app-button>
    <app-button
      type="button"
      style="margin-left: 10px"
      class="cancel"
      @click="onCancel"
    >
      Cancel
    </app-button>
    <app-button
      type="button"
      style="margin-left: 10px"
      class="delete"
      @click="onDelete"
    >
      Delete
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
