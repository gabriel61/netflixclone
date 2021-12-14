//FILME EM DESTAQUE
import React from "react";
import './FeaturedMovie.css'

export default ({item}) => {
    console.log(item);

    let firstDate = new Date(item.first_air_date);
    let genres= [];
    /* criando um array de generos */
    for(let i in item.genres) {
        genres.push( item.genres[i].name );
    }
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            {/* <div>{item.original_name}</div> */}
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    {/* incluindo informações do filme em destaque */}
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        {/* se o num de temporadas for diferente de 1 entao inclue o 's' se nao '' */}
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`}>▶ Assistir</a>
                        <a href={`/list/add/${item.id}`}>+ Minha Lista</a>
                    </div>
                    {/* array de generos seperados por um , e um ''*/}
                    <div className="featured--genres"><strong>Gêneros: </strong> {genres.join(', ')}</div>
                </div>

            </div>
        </section>
    );
}