<template>
    <v-container id="container">
        <Login></Login>
        <div class="overlay-container">
            <div class="overlay">
                <Overlay></Overlay>
            </div>
        </div>
    </v-container>
</template>
<script>
import Login from "@/components/Login"
import Overlay from "@/components/Overlay"
export default {
    components: {
        Login,
        Overlay
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

form {
    background-color: #ffffff;
    height: 100%;
}

#container{
    display: flex !important;
}
.container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    max-width: 100%;
    min-height: 680px;
}

.form-container {
    top: 0;
    height: 50%;
    transition: all 0.6s ease-in-out;
}

.overlay-container {
    width: 50%;
    height: 100%;
    min-height: 350px;
    background: linear-gradient(to right, #4a6d93, #89c7fa);
    transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

.overlay {
    background: linear-gradient(to right, #4a6d93, #89c7fa);
    height: 100%;
    width: 80%;
    transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay-left {
    transform: translateX(0);
}

.container.right-panel-active .overlay-right {
    transform: translateX(20%);
}

/* font sizes */
.sm-title {
    font-size: 18px;
}

.md-title {
    font-size: 44px;
}

.sm-description {
    font-size: 12px;
}

.md-description {
    font-size: 16px;
}
</style>