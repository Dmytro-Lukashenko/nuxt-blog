<template>
  <div class="input-control">
    <label class="input-control__label">
      <slot/>
    </label>
    <input
        v-if="controlType === 'input'"
        v-bind="$attrs"
        :value="value"
        class="input-control__input"
        @input="inputHandle($event)">
    <textarea
        v-if="controlType === 'textarea'"
        rows="10"
        :value="value"
        class="input-control__textarea"
        @input="inputHandle($event)"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    inputHandle(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'AppControlInput.scss'
</style>
