<template>
  <button      
      class="button"
      v-bind="$attrs"      
      v-on="$listeners"      
  >   {{title}}
  </button>
</template>

<script>
export default {
 props:{
   title: {
     type: String,
     requires: true,
     default: 'Home'
   }
 }
}
</script>

<style lang="scss" scoped>
@import 'AppButton.scss';
</style>
