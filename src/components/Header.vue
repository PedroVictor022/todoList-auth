<template>
   <header>
      <h1>TodoList</h1>
      <nav>
         <router-link to="/">Home</router-link>
         <router-link to="/todos">Todos</router-link>
         <router-link to="/register">Registrar</router-link>
         <router-link to="/login">Login</router-link>
      </nav>
   </header>
</template>

<script>
   export default {
      name: 'Header'
   }
</script>

<style scoped>
   header {
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      background-color: #222;
   }
   header > h1 {
      color:#fefefe;
   }
   nav {
      display:inline-flex;
      gap: 2rem;
   }
   a {
      color: #fefefe;
      text-decoration: none;
      font-weight: bold;
   }
   a:hover {
      text-decoration: underline;
      color: rgb(65, 190, 107);
   }
</style>