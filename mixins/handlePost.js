export default {
  methods: {
    handlePost(action, data) {
      this.$store
        .dispatch(action, data)
        .then(() => {
          this.$router.push('/admin')
        })
        .catch((e) => console.log(e))
    },
  },
}
