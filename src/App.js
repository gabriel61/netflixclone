import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from "./Tmdb";
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  /* variavel para manipulação do backg do Header */
  const [blackHeader, setBlackHeader] = useState(false);

  //useEffect executa a função quando a tele é carregada.
  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o filme destaque que tem slug = originals
      let originals = list.filter(i=>i.slug === 'originals');
      //gerando um numero aleatorio dentro da qtdd max de originals
      let randomChosen = Math.floor(Math.random()*(originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  /* Adicionando evento de monitoramento da propria pagina */
  useEffect(()=>{
    const scrollListener = () => {
      /* monitarar o scroll da tela e quando ele estiver acima de   o blackheader setado para true */
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    /* quando na tela houver algum evento de scroll ele vai rodar a função scrollListener */
    window.addEventListener('scroll', scrollListener);
    /* removendo evento ao sair da pagina */
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    //codigo unico para mostragem dos itens da pagina principal
    //header - destaque - as listas - footer
    <div className="page">

      <Header black={blackHeader} />

      {/* quando FeaturedData existir a gente manda o componente */}
      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))}
      </section>

      <footer>
        Feito em Live (https://youtube.com/watch?v=tBweoUiMsDg) para estudo de React<br/>
        Direitos de imagem para Netflix<br/>
        Dados Extraidos de https://themoviedb.org
      </footer>
    </div>
  );
}