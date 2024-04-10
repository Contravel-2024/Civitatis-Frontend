<template>
<div>hola
    
</div>
</template>
<script>
export default {
    name: "loginView",
    data(){
        return {
            formClass: ''
        }
    },
    mounted(){

        const breakpoint = this.$vuetify

        this.formClass = breakpoint.mdAndUp ? 'px-8' : 'px-2'
    }
}
</script>

<style scoped>
.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}
.team-img {
  width: 50%;
}
</style>