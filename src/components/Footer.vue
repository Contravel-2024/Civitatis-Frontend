<template>
    <v-footer class="d-flex flex-column footer">

        <div class="px-4 py-2 bg-black text-center w-100">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </div>
    </v-footer>
</template>
<script>
export default {
    name: "FooterView",
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>
<style scoped>
.footer{
    position: absolute;
    margin: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: transparent;
}
</style>