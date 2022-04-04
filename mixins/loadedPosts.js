export default {
    computed: {
        loadedPosts() {
            return this.$store.getters.loadedPosts
        }
    }
}
