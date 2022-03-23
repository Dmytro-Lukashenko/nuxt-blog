<template> 
<div>
<button @click="onLoadLink">Products</button>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    onLoadLink(){
      this.$router.push('/products')
    }
  }
}
</script>
