<template>
    <div>
        <form class="formulario">
            <label for="nome">Nome:</label>
            <input
                type="text"
                id="nome" 
                name="nome" 
                v-model="pessoa.nome"/>
            <br/>
            <label for="dataNascimento">Data Nascimento:</label>
            <input 
                type="number" 
                id="dataNascimento" 
                name="dataNascimento" 
                v-model="pessoa.dataNascimento"/>
            <br/>
        </form>
    </div>

    <p style="text-align: center;">{{ pessoa.nome }} nasceu em {{ pessoa.dataNascimento }}</p>
</template>

<script setup>
import { reactive } from "vue";
//const nome = ref("Willame");
//const dataNascimento = ref(0);
//const idade = ref(0);

const pessoa = reactive({
    nome:'',
    dataNascimento: 0,
    idade: 0 
})
</script>

<style scoped>
.formulario{
    margin: 0 auto;
    padding: 5px;
    width: 200px;
    background: darkcyan;
}
</style>