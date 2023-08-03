<script setup>
import NavBar from './components/NavBar.vue'
import Cabecalho from './components/Cabecalho.vue'
import Usuario from './components/Usuario.vue'
import ListaUsuario from './components/ListaUsuario.vue';
</script>

<template>
  <NavBar/>
  <header>
   <Cabecalho />
  </header>

  <main>
    <!--<Usuario></Usuario>-->
    <router-view></router-view>
  </main>
</template>

<style >
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
header {
  line-height: 1.5;
}

[color-scheme="dark"] {
  background-color: black;
  color: white;
}

</style>
