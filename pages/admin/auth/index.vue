<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <app-control-input v-model="email" type="email">E-mail Address</app-control-input>
        <app-control-input v-model="password" type="password">Password</app-control-input>
        <app-button type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</app-button>
        <app-button 
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin =!isLogin"
          >Switch to {{ isLogin ? 'Sign Up' : 'Login' }}</app-button>
          <app-button @click="$router.push('/')">Home</app-button>
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
      email:'',
      password:''
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('authenticateUser', {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      })
      .then(() => {        
        this.$router.push('/admin')
      })
      .catch(e => console.log(e))
    } 
  }
}

</script>

<style lang="sass" scoped>
@import 'auth.scss'
</style>