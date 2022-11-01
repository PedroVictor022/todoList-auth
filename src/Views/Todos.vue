<template>
   <div class="container">
      <div class="todo-app">
         <div class="title">
            <h2>My Todos</h2>
         </div>
         <div class="todo-container">
            <div class="todo-form">
               <input type="text">
               <button>Add Todo</button>
            </div>
            <div class="todo-list">
               <p>Tarefa 1</p>
               <p>Tarefa 2</p>
               <p>Tarefa 3</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'Todos'
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
</style>