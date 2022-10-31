<script>
  import Headerc from './components/Header.vue';
  export default  {
    components: {
      Headerc
    }
  }
</script>

<template>
  <Headerc />
  <router-view/>

</template>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
</style>
