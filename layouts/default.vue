<template>
  <div>
    <the-header @sidenavToggle="displaySidenav = !displaySidenav"/>
    <the-sidenav
        :show="displaySidenav"
        @close="displaySidenav = false"
    />
    <nuxt/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>
