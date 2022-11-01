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
            <div class="todo-list" v-for="(todo) in todos" :key="todo.id">
               <div class="todo-list-container">
                  <p>{{ todo.title }}</p>
                  <button>X</button>
               </div>
            </div>   
         </div>
      </div>
   </div>
</template>

<script>
import { ref } from "vue"
export default {
   name: 'Todos',
   setup(){
      const newTodo = ref("")
      const todos = ref([]);

      function generateID() {
         return Math.floor(Math.random() * 1000).toFixed(2)
      }

      function addNewTodo() {
         todos.value.push({
            id: generateID(),
            title: newTodo.value
         })
         console.log(todos.value)
      }
      return {
         newTodo,
         todos, 
         generateID, 
         addNewTodo
      }
   },
}
</script>

<style scoped>
.container {
   margin: 2rem auto;
   width: 320px;
   background:#222;
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
   width:100%;
}
.todo-form {
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.todo-form > input {
   border: none;
   border-radius: 5px;
   margin-right: 0.5rem;
   padding: 2px;
   outline: none;
   background: #111111af;
   color: #fefefe;
}
.todo-form > button {
   border: none;
   border-radius: 5px;
   font-weight: bold;
   font-size: 14px;
   padding: 2px;
   color: #fefefe;
   background: #0bb15e;
}
.todo-list {
   color: #fefefe;
   margin-top: 1rem;
   display:inline-flex;
   gap: 1rem;
   flex-direction: column;
}
.todo-list-container {
   display: flex;
   gap:0.5rem;
   
}
</style>