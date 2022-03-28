<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form>
        <app-control-input type="email">E-mail Address</app-control-input>
        <app-control-input type="password">Password</app-control-input>
        <app-button type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</app-button>
        <app-button 
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin =!isLogin"
          >Switch to {{ isLogin ? 'Sign Up' : 'Login' }}</app-button>
      </form>
    </div>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput/AppControlInput'
import AppButton from '@/components/UI/AppButton/AppButton'
export default {
  name: 'AdminAuthPage',
  components: {
    AppControlInput,
    AppButton
  },
  layout: 'admin',  
  data() {
    return {
      isLogin: true
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'auth.scss'
</style>