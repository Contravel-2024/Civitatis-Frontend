<template>
  <div id="app" class="card-overlay">
    <v-app class="app-index">
      <div :class="divClass">
        <router-view />
      </div>
      <footer :class="footerClass">
        <a href="//www.contravel.com.mx" target="_blank">@{{ new Date().getFullYear() }} - <v-img
            src="@/assets/logo_contravel_white.png" style="margin-left: 6px;" max-height="40" :max-width="90" /> </a>

      </footer>

    </v-app>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      divClass: '',
      footerClass: ''
    }
  },
  watch: {
  },
  mounted() {
    const breakpoint = this.$vuetify
    this.divClass = breakpoint.mdAndUp ? 'md-main-style' : 'sm-main-style'
    this.footerClass = breakpoint.mdAndUp ? 'footer-md' : 'footer-sm'

  },
  methods: {
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap");

.app-index {
  background: linear-gradient(to right, #284563, #89c7fa) !important;
}

#app {
  transition: all 0.6s ease-in-out;
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1414&q=80") no-repeat center center fixed;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  transition: transform 0.6s ease-in-out;
}

.sm-main-style {
  margin: auto;
  width: 95%;
}

.md-main-style {
  margin: auto;
  width: 70%;
}

.footer-md {
  padding: 30px 0px;
}

.footer-md a {
  text-decoration: none;
  color: white !important;
  font-size: 1.2rem;
  font-family: cursive;
  font-weight: 600;
}

.footer-sm {
  padding: 20px 0px;
}

.footer-sm a {
  text-decoration: none;
  color: white !important;
  font-size: 0.9rem;
  font-family: cursive;
  font-weight: 600;
}

footer {
  display: flex !important;
  justify-content: center;
  align-items: center;
  background-color: #00000058;
  padding-bottom: 10px !important;
  padding-top: 10px !important;

}

footer a{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>