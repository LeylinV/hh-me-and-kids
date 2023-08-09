<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <HeaderLogo />
      </router-link>
    </div>
    <nav>
      <router-link to="/">Форма</router-link>
      <router-link to="/preview">Превью</router-link>
    </nav>
  </header>
</template>

<script>
import HeaderLogo from './logo/HeaderLogo.vue'
export default {
  components:{
    HeaderLogo
  }

}
</script>

<style scoped>
  header{
    padding: 22px  90px;
    box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.10);
  }
  .logo{
    position: absolute;
    left: 5%;
  }
  @media (max-width: 800px) {
    .logo {
      display: none;
    }
  }
  nav{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav a{
    box-sizing: border-box;
    padding: 0px 12px;
    color: rgba(17, 17, 17, 0.48);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height:  171.429%;
    text-decoration: none;
  }
  nav a:hover{
    color: #000;
  }
</style>