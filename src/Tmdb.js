const API_KEY = '37aec4bed16adfac5f6eec74a456d83e';
const API_BASE = 'https://api.themoviedb.org/3';

/* 
- originais da netflix
- recomendados
- em alta (trending)
- ação
- comédia
- terror
- romance
- documentários 
*/

/* 
função auxiliar que da um Fetch na url que quero pegar e retorna o 
resultado em json(pois iremos utilizar essa f em todas categorias).
recebe endpoint(url)e faz um Featch juntando com a nossa base acima.

*/
//await = espere a resposta e vá para o proximo

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    //função para pegar as listas de filmes e 
    //colocar em seus respectivos locais

    //pegando a lista da Home(lista da pag principal da netflix)
    //função assincrona que retorna um array
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/move/top-rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    }
}