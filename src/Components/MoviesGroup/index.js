import React from 'react';
import './styles.css'
const moviesGroup = ({ infos }) => {
    const items = infos.items.results
    return (
        <div className='containerGroupMovie'>
            <h2>{infos.title}</h2>
            <div className='flexList'>
                {items.map( (item, key) =>
                    <img key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="Imagem do filme/serie" />
                )}
            </div>
        </div>
    )
}

export default moviesGroup