<template>
  <div class="about">
    <section class="about__content">
      <img
        class="about__content_logo"
        src="/images/desktop/levi9-icon.png"
        width="50px"
        height="50px"
      />
      <h1 class="about__content_title">LEVI9 Front End Academy</h1>
      <h2 class="about__content_text">
        This is Home-Work Application "NUXT BLOG"
      </h2>
      <p class="about__content_text">
        This application was developed by Dmytro Lukashenko during the "Nuxt.js
        - Vue.js on Steroids" Udemy course
      </p>
      <p class="about__content_text">
        During the development of the application, the following features of the
        Nuxt JS were used:
      </p>
      <ul class="about__content_list">
        <li v-for="title of list" :key="title" class="about__content_list-item">
          {{ title }}
        </li>
      </ul>
      <p class="about__content_text">
        For backend was used Firebase Authentication & Firebase Real Database
      </p>
      <p class="about__content_text">
        For token persistent were used Local storage (client side) & Cookies
        (server side)
      </p>
      <p class="about__content_text">For deployment was used Heroku</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['Layouts', 'Transition', 'Middleware', 'asyncData'],
    }
  },
}
</script>

<style lang="scss" scoped>
.about {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

    &__content {
    position: relative;
    margin: 44px;
    height: 70vh;
    text-align: center;

      &_logo {
        position: absolute;
        top: 15px;
        left: 15px;
      }

      &_title {
        margin: 0;
        font-size: 3rem;
        color: #1434a0;
      }

      &_text {
        font-size: 1.5rem;
        font-weight: 700;
      }

      &_list {
        list-style: none;
        font-size: 1.5rem;
        font-weight: 700;

        &-item {
          color: #1434a0;
        }
    }
    @media (max-width: 830px) {
      &_logo {
        position: absolute;
        top: 10px;
        left: 10px;
      }

      &_title {
        margin: 0;
        font-size: 2rem;
        color: #1434a0;
      }

      &_text {
        font-size: 1rem;
        font-weight: 500;
      }

      &_list {
        list-style: none;
        font-size: 1rem;
        font-weight: 500;

        &-item {
          color: #1434a0;
        }
      }
  }
    @media (max-width: 600px) {
      &_logo {
        position: absolute;
        visibility: hidden;
        top: 10px;
        left: 10px;
      }

      &_title {
        margin: 0;
        font-size: 1.5rem;
        color: #1434a0;
      }

      &_text {
        font-size: 0.75rem;
        font-weight: 500;
      }

      &_list {
        list-style: none;
        font-size: 0.5rem;
        font-weight: 500;

        &-item {
          color: #1434a0;
        }
      }
    }
  }
}


</style>
