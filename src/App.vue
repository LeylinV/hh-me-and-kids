<template>
    <HeaderUI/>
    <div class="page">
        <router-view/>
    </div>
    <FooterUI/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.page {
    flex: 1;
    width: 100%;
    max-width: 900px;
    margin: 10px auto;
}


</style>
<script setup>
import FooterUI from "@/components/ui/FooterUI/FooterUI.vue";
import HeaderUI from "@/components/ui/HeaderUI/HeaderUI.vue";
</script>