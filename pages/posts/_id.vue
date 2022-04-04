<template>
  <div class="container">
    <section class="post">
      <h1>{{ loadedPost.title }}</h1>
      <div class="post__details">
        <div>Last updated on {{ loadedPost.updatedDate | date }}</div>
        <div>Written by {{ loadedPost.author }}</div>
      </div>
      <div
        class="post__thumbnail"
        :style="{ backgroundImage: 'url(' + loadedPost.thumbnail + ')' }"
      />
      <p>{{ loadedPost.content }}</p>
    </section>
    <section class="post__feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a class="post__feedback_link" href="mailto:d.a.lukashenko@gmail.com">d.a.lukashenko@gmail.com</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData({ $axios, params, error }) {
    return $axios
      .$get('posts/' + params.id + '.json')
      .then((data) => {
        return {
          loadedPost: data,
        }
      })
      .catch((e) => error(e))
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;

  @media (min-width: 768px) {
    width: 600px;
    margin: auto;
  }

  &-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  &__thumbnail {
  width: 100%;
  height: 300px;
  background-position: center;
  background-size: cover;
}
  &__feedback{
    font-size: 1rem;
    &_link{
      text-decoration: none;
      cursor: pointer;
      color: #0e3d47;
      font-weight: 700;
      &:hover,
      &:active {
        color:red;
    }
  }
}
}

</style>
