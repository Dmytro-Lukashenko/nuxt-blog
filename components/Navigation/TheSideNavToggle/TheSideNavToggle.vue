<template>
  <div
    class="drawer-toggle"
    role="button"
    @click="$emit('toggle')">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<script>
export default {
  name: "TheSidenavToggle",
};
</script>

<style lang="scss" scoped>
    @import 'TheSideNavToggle.scss'
</style>