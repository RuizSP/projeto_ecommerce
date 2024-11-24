let {REACT_APP_STRING_CONEXAO} = process.env;

export default async function fetchApi()
{
    try{
        const response = await fetch(process.env.REACT_APP_STRING_CONEXAO);
        const data = await response.json();
        return data;
    }catch (error)
    {
        console.error("Erro ao buscar dados:", error);
    }
}