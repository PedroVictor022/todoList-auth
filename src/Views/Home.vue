<template>
  <div class="main">
    <div class="apresentation">
      <h2>Bem vindo ao TodoApp Online</h2>
      <p>Aqui você pode salvar suas tarefas online, sem custo e com segurança</p>
    </div>
    <div class="main-content">
      <h3>Como usar o TodoApp Online?</h3>
      <ul class="info">
        <li>Primeiro crie um conta aqui na plataforma <router-link to="register">criar conta.</router-link></li>
        <li>Apos criar a conta, navegue até Todos.</li>
        <li>Após isso voce pode já pode começar salvar suas tarefas.</li>
      </ul>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'TodoList',

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  width: 100%;
  height: 100%;
  background-color: #111;
  color: #fefefe;
}
.apresentation{
  margin: 4rem auto;
  max-width: 480px;
}
.main-content {
  margin: 1rem auto;
  max-width: 480px;
}
.info {
  width: 100%;
  list-style: none;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap:0.4rem;
  margin-top: 0.3rem;
}
</style>