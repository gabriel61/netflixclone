//LINHA DE FILMES

import React from "react";
import './MovieRow.css'

export default ({title, items}) => {
    return (
        <div className="movieRow">
            <h2>{title}</h2>

            {/* area da lista */}
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {/* >0 ou seja, se houver filmes para mostrar ele vai da um map na lista.
                    um loop dentro do loop das listas para mostrar os filmes */}
                    {items.results?.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                        
                    ))}
                </div>

                
                
            </div>
        </div>
    );
}