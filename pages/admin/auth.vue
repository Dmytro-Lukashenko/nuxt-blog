<template>
  <div class="admin-auth">
    <div class="admin-auth__container">
      <form @submit.prevent="onSubmit">
        <app-control-input v-model="email" type="email" label="E-mail Address"
          ></app-control-input
        >
        <app-control-input v-model="password" type="password" label="Password"
          ></app-control-input
        >
        <app-button type="submit" :title = 'isLogin ? "Login" : "Sign up"' ></app-button>
        <app-button
          title="Switch to"
          type="button"
          class="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          > {{ isLogin ? 'Sign Up' : 'Login' }}
        </app-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      console.log('onSubmit')
      this.$store
        .dispatch('authenticateUser', {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push('/admin')
        })
        .catch((e) => console.log(e))
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-auth {
  padding: 20px;
  
  &__container {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 2px #ccc;
    width: 300px;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
