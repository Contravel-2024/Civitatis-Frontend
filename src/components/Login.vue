<template>
  <div class="form-container sign-in-container">
    <v-form action="#" :class="formClass + ' formLogin'" ref="form">
      <div
        :class="divClass"
      >
        Bienvenido
      </div>
      <v-text-field
        prepend-inner-icon="mdi-account"
        placeholder="Usuario"
        variant="underlined"
        @keypress.enter="SesionStart()"
        v-model="username"
        :rules="[v => !!v || 'Usuario requerido!']"
        required
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-lock"
        placeholder="Contraseña"
        type="password"
        variant="underlined"
        @keypress.enter="SesionStart()"
        v-model="password"
        :rules="[v => !!v || 'Contraseña requerido!']"
        required
      ></v-text-field>
      <v-btn
        color="#fe4e85"
        block
        dark
        tile
        class="pa-6 font-weight-bold"
        elevation="0"
        @click="SesionStart()"
        >Iniciar Sesion</v-btn
      >
    </v-form>
  </div>
</template>
<script>
import SesionServices from '@/services/SesionServices'
export default {
  name: "loginView",
  data() {
    return {
      formClass: '',
      spanClass: '',
      username: null,
      password: null,
      messageError: null,
      isLoading: false,
      divClass: ''
    }
  },
  methods:{
    async SesionStart(){
      const { valid } = await this.$refs.form.validate()
      if(valid == false){
        return
      }
      this.error = null
      this.isLoading= true
      const  respuesta = await SesionServices.Login(this.username, this.password)
      console.log(respuesta)
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