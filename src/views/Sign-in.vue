<template>
    <v-container id="container">
        <div class="overlay-container">
            <div class="overlay">
                <Overlay></Overlay>
            </div>
        </div>
        <Login></Login>
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
    transition: all 0.6s ease-in-out;
}

#container{
    display: flex !important;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 15px;
    animation: fadeIn 1.5s ease;
    transition: all 0.6s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
}
.container {
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    max-width: 100%;
    min-height: 700px;
}

.form-container {
    top: 0;
    height: 50%;
    transition: all 0.6s ease-in-out;
}

.overlay-container {
    border: 3px dashed #284563;
    background-color: #fcfcfc;
    border-radius: 15px 0px 0px 15px;
    width: 60vw;
    height: 100%;
    min-height: 400px;
    /*background: linear-gradient(to right, #4a6d93, #89c7fa);*/
    transition: transform 0.6s ease-in-out;
    display: flex;
    align-items: center;
}

.container.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

.overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    height: 100%;
    width: 100%;
    transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
    top: 0;
    height: 100%;
    width: 80%;
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
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 10px;
    
}

.md-description {
    font-size: 28px;
    font-weight: bold;
    padding-bottom: 15px;
}


@media (min-width: 1920px){
    .v-container{
        max-width: 1200px !important;
    }
}

@media (max-width: 500px){
  #container{
    flex-direction: column;
    transition: transform 0.6s ease-in-out;
  }
  .overlay-container {
    min-height: auto;
    border-radius: 15px 15px 0px 0px;
    border:none;
    background: transparent;
    width: 90vw;
    /*background: linear-gradient(to right, #4a6d93, #89c7fa);*/
    transition: transform 0.6s ease-in-out;
}
.overlay {
    min-height: 20vh;
    transition: transform 0.6s ease-in-out;
}
.sign-in-container{
    width: 90% !important;
}
}

@media (max-height: 450px){
    #container {
    height: 90vh !important;
    display: flex;
}

.overlay-container{
    min-height: auto;
}

.overlay-panel{
    height: auto;
}

.sign-in-container{
    min-height: auto !important;
}

.form-container{
    height: auto;
}
}
</style>