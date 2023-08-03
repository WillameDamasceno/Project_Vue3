import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCargos = defineStore('cargos', () => {
    //state
    const cargos = ref([]);
    //actions
    const adicionaCargo = (funcionario) => {
        cargos.value = cargos.value.filter((x) => x.id !== funcionario.id);
        cargos.value.push(funcionario);
    };
    //getters
    const totalCargos = computed(() => cargos.value.length);

    return {
        adicionaCargo,
        totalCargos,
        cargos,
    };
});