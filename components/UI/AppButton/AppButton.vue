<template>
  <button
      class="button"
      v-bind="$attrs"
      v-on="$listeners"
  >
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
@import 'AppButton.scss';
</style>
