<template>
    <div style="position:absolute; left:0px; top:0; width: 100%;">
        <v-toolbar color="#fffff" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-spacer></v-spacer>
            user - agencia
            <v-menu transition="scroll-y-transition">
                <template v-slot:activator="{ props }">
                    <v-btn icon class="ma-2" color="primary" v-bind="props">
                        <v-icon>mdi-account</v-icon>
                    </v-btn>

                </template>
                <v-list>
                    <v-list-item link>
                        <v-list-item-title>
                            Inicio</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-title>
                            Reservas</v-list-item-title>
                    </v-list-item>
                    <v-divider class="m-0"></v-divider>
                    <v-list-item link append-icon="mdi-export" title="Cerrar Sesion">
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn icon>
                <v-icon>mdi-cart-variant</v-icon>
            </v-btn>
        </v-toolbar>
    </div>
</template>
<script>
export default {
    name: "HeaderHome",
    data() {
        return {
            accountExpand: false
        }
    }
}
</script>
<style>
.accountExpand {
    position: relative;
    left: 42vw;
}
</style>