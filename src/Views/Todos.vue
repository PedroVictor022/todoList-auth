<template>
   <div class="container">
      <div class="todo-app">
         <div class="title">
            <h2>My Todos</h2>
         </div>
         <div class="todo-container">
            <div class="todo-form">
               <input type="text" v-model="newTodo">
               <button @click="addNewTodo">Add Todo</button>
            </div>
            <div class="todo-list">
               <div class="todo-list-container" v-for="(todo, index) in todos" :key="todo.id">
                  <p>{{ todo.title }}</p>
                  <button @click="deleteTodo(index)">Delete</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref } from "vue";
import { setDoc, doc, collection, addDoc } from "firebase/firestore";
import { db } from "../main";

const newTodo = ref("");
const todos = ref([]);

function generateID() {
   return Math.floor(Math.random() * 1000).toFixed(2);
};

async function addNewTodo(e) {
   e.preventDefault();
   if (newTodo.value.trim()) {

      let newTodoItem = {
         id: generateID(),
         title: newTodo.value
      }
      todos.value.push(newTodoItem)

      await addDoc(collection(db, "todoList"), newTodoItem)

      // Implementar funcao de deletar do banco de dados
      // Transformar a div que contem o input, em um formulario
   }

   console.log(todos.value);
};
async function deleteTodo(index) {
   todos.value.splice(index, 1);
}

</script>

<style scoped>
.container {
   margin: 2rem auto;
   width: 320px;
   background: #222;
   border-radius: 6px;
}

.todo-app {
   padding: 1rem;
   width: 100%;
}

.title {
   text-align: center;
   margin-bottom: 0.5rem;
   color: #fefefe;
}

.todo-container {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   width: 100%;
}

.todo-form {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
}

.todo-form>input {
   border: none;
   width: 100%;
   border-radius: 5px;
   margin-right: 0.5rem;
   padding: 2px;
   outline: none;
   background: #111111af;
   color: #fefefe;
}

.todo-form>button {
   border: none;
   border-radius: 5px;
   font-weight: bold;
   font-size: 14px;
   padding: px;
   color: #fefefe;
   background: #0bb15e;
}

.todo-list {
   color: #fefefe;
   margin-top: 1rem;
   display: inline-flex;
   gap: 1rem;
   flex-direction: column;
   width: 80%;

}

.todo-list-container {
   flex-wrap: wrap;
   background: #75757521;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;
   gap: 0.5rem;
   padding: 0.5rem;
   border-radius: 6px;

}

.todo-list-container>button {
   border: none;
   cursor: pointer;
   width: 60px;
   border-radius: 4px;
   background: #7575758c;
   font-weight: 500;
   color: #fefefe;

}
</style>