<template>
  <div class="form-container sign-in-container">
    <v-form action="#" :class="formClass + ' formLogin'">
      <div
        :class="divClass"
      >
        Bienvenido
      </div>
      <v-text-field
        prepend-inner-icon="mdi-account"
        placeholder="Usuario"
        variant="underlined"
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-lock"
        placeholder="Contraseña"
        type="password"
        variant="underlined"
      ></v-text-field>
      <v-btn
        color="#fe4e85"
        block
        dark
        tile
        class="pa-6 font-weight-bold"
        elevation="0"
        @click="login()"
        >Iniciar Sesion</v-btn
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
      password: null,
      divClass: ''
    }
  },
  mounted() {

    const breakpoint = this.$vuetify

    this.formClass = breakpoint.mdAndUp ? 'px-8' : 'px-2'
    this.spanClass = breakpoint.mdAndUp ? 'text-secondary forgot-password-md' : 'text-secondary forgot-password-sm'
    this.divClass = breakpoint.mdAndUp ? 'sm-description ' : 'md-description '
  }
}
</script>

<style scoped>
.formLogin{
width: 90%;
background: transparent;
}

.sign-in-container {
  left: 0;
  min-height: 100%;
  width: 60vw;
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

</style>