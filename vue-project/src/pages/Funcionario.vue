<template>
    <div>
        <div v-if="carregando">Carregando...</div>
        <Usuario :pessoa="pessoa" v-else></Usuario>
        <select v-model="cargoSelecionado">
            <option disabled value="">Selecione o cargo</option>
            <option v-for="c in cargos" :value="c" :key="c">{{ c }}</option>
        </select>
    </div>
 </template>
 
 <script setup>
    import Usuario from '../components/Usuario.vue';
    import { useFetch } from '../composables/fetch';
    import { useRoute } from 'vue-router';
    import { ref, watch } from 'vue';
    import { useCargos } from "../store/cargos";

    const store = useCargos();

    const { adicionaCargo } = store;

    const router = useRoute();

    const id = router.params.id;

    const cargoSelecionado = ref("");

    const cargos = ['Gerência','Surpervisão','Operacional'];

    const { data: pessoa, carregando } = useFetch(
        `https://reqres.in/api/users/${id}`
    );

    watch(cargoSelecionado, (novoCargo) => {
        const { id, first_name: nome } = pessoa.value;
        const funcionario = { id, nome, cargo: novoCargo };
        adicionaCargo(funcionario);
    });
 </script>
 
 <style scoped>
 
 </style>