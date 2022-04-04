<template>
  <div>
    <section class="intro">
      <h1 class="intro-title">
        Get the latest tech news about VueJS & NUXTjs awesome frameworks!
      </h1>
    </section>
    <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
import loadedPosts from '~/mixins/loadedPosts'

export default {
  mixins: [loadedPosts],
}
</script>

<style lang="scss" scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('/images/desktop/vue-bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &-title {
    text-align: center;
    position: absolute;
    top: 57%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: #0e3d47;
    background-color: rgb(211, 211, 211, 0.5);
    padding: 10px;
    border-radius: 10px;
    box-sizing: border-box;
    border: 1px solid grey;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
    @media (max-width: 480px) {
      font-size:1rem;
    }
  }
}
</style>
