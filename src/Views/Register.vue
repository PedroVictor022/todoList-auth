<template>
   <div class="form_container">
      <h2>Create Account</h2>
      <div class="form_input">
         <label for="email">Email</label>
         <input 
            type="text" 
            name="email" 
            id="email" 
            v-model="email"
         >
      </div>
      <div class="form_input">
         <label for="password">Password</label>
         <input 
            type="text" 
            name="password" 
            v-model="password"
         >
      </div>
      <button @click="createAccount()">Next</button>
   </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();
const auth = getAuth()

const createAccount = () => {
   createUserWithEmailAndPassword(auth, email.value, password.value)
   .then((userCredential) => {
      console.log('Successfully registred!', auth, auth.currentUser, userCredential.user)
      router.push('/todos');
   })
   .catch((error) => console.log(error.message))
}


</script>

<style>
.form_container {
   max-width: 320px;
   margin: 4rem auto;
   padding: 1rem;

}
.form_container > h2 {
   color: aliceblue;
   text-align: center;
   margin-bottom: 0.5rem;
}
.form_input {
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
}
.form_input > label {
   margin-top: 0.5rem;
   color: aliceblue;
   text-decoration: underline;
   font-size: 18px;
}
button {
   width:100%;
   margin-top: 1rem;
   border-radius: 8px;
   border: none;
   background: rgb(0, 102, 255);
   font-weight: bold;
   color: aliceblue;
   padding: 0.2rem;
   cursor: pointer;
}
button:hover {
   background: rgb(59, 127, 228);
}
</style>