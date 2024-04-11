<template>
  <div class="form-container sign-in-container">
    <v-form action="#" :class="formClass + ' formLogin'">
      <h1 class="pb-8 font-weight-bold">Sign in</h1>
      <v-text-field
        prepend-inner-icon="mdi-account"
        placeholder="Username"
        filled
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-lock"
        placeholder="Password"
        type="password"
        filled
      ></v-text-field>
      <v-btn
        color="info"
        block
        dark
        tile
        class="pa-6 font-weight-bold"
        elevation="0"
        @click="login()"
        >Sign In</v-btn
      >
    </v-form>
  </div>
</template>
<script>
export default {
  name: "loginView",
  data() {
    return {
      formClass: '',
      spanClass: '',
      username: null,
      password: null
    }
  },
  mounted() {

    const breakpoint = this.$vuetify

    this.formClass = breakpoint.mdAndUp ? 'px-8' : 'px-2'
    this.spanClass = breakpoint.mdAndUp ? 'text-secondary forgot-password-md' : 'text-secondary forgot-password-sm'
  }
}
</script>

<style scoped>
.formLogin{
width: 80%;
}

.sign-in-container {
  left: 0;
  min-height: 40% !important;
  width: 50%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.team-img {
  width: 60%;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.forgot-password-sm {
  font-size: 12px;
}

.forgot-password-md {
  font-size: 15px;
}
</style>