<template>
<div class="input-control">
    <label class="input-control__label">
      {{label}}
    </label>
    <textarea
      rows="10"
      :value="value"
      class="input-control__textarea"
      @input="inputHandle($event)">
    </textarea>     
  </div>    
</template>
<script>
export default { 
  props: {
    controlType: {
      type: String,
      rewquired: true,
      default: 'input'
    },
    value: {
      type: String,
      required: true,
      default: ''
    },
    label:{
      type: String,
      required: true,
    }
  },
  methods: {
    inputHandle(e) {     
      this.$emit('input', e.target.value)
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'AppControlTextarea.scss'
</style>