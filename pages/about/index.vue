<template>
  <div class="about">    
    
    <section class="about-content">       
      <img class="about-content-logo" src="/images/desktop/levi9-icon.png" width="50px" height="50px">       
      <h1 class="about-content-title">LEVI9 Front End Academy</h1>
          <h2 class="about-content-text">This is Home-Work Application "NUXT BLOG"</h2>
          <p class="about-content-text">This application was developed by Dmytro Lukashenko during 
            the "Nuxt.js - Vue.js on Steroids" Udemy course </p>
          <p class="about-content-text">During the development of the application, the following features of the Nuxt JS were
            used:</p>
          <ul class="about-content-list">
            <li class="about-content-list_item">Layouts</li>
            <li class="about-content-list_item">Transition</li>
            <li class="about-content-list_item">Middleware</li>
            <li class="about-content-list_item">asyncData</li>
          </ul>
          <p class="about-content-text">For backend was used Firebase Authentication & Firebase Real Database</p>
          <p class="about-content-text">For token persistent were used Local storage (client side) & Cookies (server side)</p>
          <p class="about-content-text">For deployment was used Heroku</p>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
  @import 'about.scss'
</style>