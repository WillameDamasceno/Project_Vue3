import { onBeforeMount, ref } from "vue"

export function useFetch(url) {
    const data = ref(null);
    const error = ref(null);
    const carregando = ref(true);

const buscaInformacoes = async () => {
    try {
        const req = await fetch(`https://reqres.in/api/users?page=2`);
        const json = await req.json();
        data.value = json.data;
    } catch (err) {
        error.value = "Erro ao obter informações na API.";
    } finally {
        carregando.value = false;
    }
};

onBeforeMount(async () => {
    await buscaInformacoes();
})

return {
    data,
    error,
    carregando
    };
}