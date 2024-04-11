<template>
  <div id="app" class="card-overlay">
    <v-app>
      <div :class="divClass">
        <router-view />
      </div>

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

#app {
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
}

.sm-main-style {
  margin: auto;
  width: 95%;
}

.md-main-style {
  margin: auto;
  width: 70%;
}

</style>