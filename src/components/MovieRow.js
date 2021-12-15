//LINHA DE FILMES

import React, { useState } from "react";
import './MovieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {

    /* movimentação da SETA p/ esq e dir */
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        /* ao clicar na seta é passa a metade da tela do usuario para o lado */
        let x = scrollX + Math.round(window.innerWidth / 2);
        /* limitando para parar em 0 */
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        /* pegando a largura da lista inteira */
        let listW = items.results.length * 150;
        /* sabendo o limite que a lista pode ir para a esquerda */
        /* tamanho da tela - tamanho da lista > x */
        if((window.innerWidth - listW) > x) {
            /* -60 pois são os 30px da esq + dir */
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>

            {/* area da lista */}
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {/* >0 ou seja, se houver filmes para mostrar ele vai da um map na lista.
                    um loop dentro do loop das listas para mostrar os filmes */}
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                        
                    ))}
                </div>

                
                
            </div>
        </div>
    );
}