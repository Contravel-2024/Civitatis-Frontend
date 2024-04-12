<template>
  <div class="overlay-panel overlay-right">
    <div class="title-overlay">
      Tours
    </div>
    <v-img src="@/assets/logo-operadora.png" alt="" class="team-img" />
  </div>
</template>



<script>
export default {
  name: 'OverlayComponent',
  data() {
    return {
      h1Class: '',
      divClass: ''
    }
  },
  mounted() {
    const breakpoint = this.$vuetify
    this.h1Class = breakpoint.mdAndUp ? 'px-8 my-4 md-title font-weight-bold ' : 'px-2 my-4 sm-title font-weight-bold '
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.team-img {
  width: 100%;
  max-height: 100% !important;
}

.title-overlay{
  font-size: clamp(16pt, 2vw, 60pt);
  font-weight: bolder;
  padding-bottom: 15px;
  font-family: 'Montserrat';
}
</style>