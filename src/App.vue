<script>
  import Headerc from './components/Header.vue';
  import Footer from './components/Footer.vue'
  export default  {
    components: {
      Headerc,
      Footer
    }
  }
</script>

<template>
  <Headerc />
  
  <router-view/>


  <Footer />

</template>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    background-color: #111;
  }
</style>
