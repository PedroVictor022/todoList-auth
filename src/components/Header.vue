<template>
   <header>
      <h1>TodoApp Online</h1>
      <nav>
         <router-link to="/">Home</router-link>
         <router-link to="/todos">Todos</router-link>
         <router-link to="/register">Registrar</router-link>
         <router-link to="/login">Login</router-link>
         <a to="*" @click="handleSingOut()" v-if="isLogged">Sing Out</a>
      </nav>
   </header>
</template>

<script setup>
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const isLogged = ref(false);
const router = useRouter();
let auth = getAuth();

onMounted(() => {
   auth;
   onAuthStateChanged(auth, (user) => {
      if(user) {
         isLogged.value = true;
      } else {
         isLogged.value = false;
      }
   })
});

const handleSingOut = () => {
   signOut(auth).then(() => {
      router.push('/')
   })
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