import React from 'react';
import Button from '../Button';
import './styles.css'

const MainMovie = ({item}) => {
    let genres= []
    const convertGenres = (i) => {
        let name = i.name.replace('&','e')
        genres.push(name)
    }
    item.genres.map((i)=>(convertGenres(i)))

    const date = new Date(item.first_air_date).getFullYear()

    return (
        <section className='mainMovie' style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`}}>
            <div className='linearMovieHorizontal'>
                <div className='linearMovieVertical'>
                    <div className='containerMainMovie'>
                        <div className='title'><h1>{item.name}</h1></div>
                        <div className='infos'>
                            <p id='average'>{(item.vote_average).toFixed(1)}</p>
                            <p>{date}</p>
                            <p>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</p>
                        </div>
                        <div className='description'>{item.overview ? item.overview : 'bla bla bla'}</div>
                        <div className='btns'>
                            <Button background={'#FFF'} color={"#000"}> ▶ Assistir</Button>
                            <Button background={'#333'} color={"#FFF"}> + Minha Lista</Button>
                        </div>
                        <div className='genres'>
                            <p>{genres.join(', ')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainMovie