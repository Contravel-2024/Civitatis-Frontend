<template>
    <div  class="overlay-panel overlay-right">
      <v-img src="@/assets/logo-operadora.png" alt="" class="team-img" />
      <div
        :class="divClass"
      >
        You don't have an account ?
      </div>
      <div
        :class="divClass"
      >
        Please Sign Up from here
      </div>
    </div>
  </template>
  
  
  
  <script>
  export default {
    name: 'OverlayComponent',
    data(){
        return{
            h1Class: '',
            divClass: '',
            btnClass: ''
        }
    },
    mounted(){
        const breakpoint = this.$vuetify
        this.h1Class = breakpoint.mdAndUp ? 'px-8 my-4 md-title font-weight-bold ' : 'px-2 my-4 sm-title font-weight-bold '
        this.divClass = breakpoint.mdAndUp ? 'sm-description ' : 'md-description '
        this.btnClass = breakpoint.mdAndUp ? 'pa-6 my-10 font-weight-bold' : 'pa-4 my-10 font-weight-bold'
    }
  };
  </script>
  <style scoped>
.overlay-right {
  background: linear-gradient(to right, #4a6d93, #89c7fa);
  right: 0;
  transform: translateX(0);
}
.team-img {
  width: 60%;
  max-height: 40% !important;
}


</style>
  