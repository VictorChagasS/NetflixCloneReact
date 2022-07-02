import React from 'react';
import Button from '../Button';
import './styles.css'

const mainMovie = () => {
    return (
        <section className='mainMovie'>
            <div className='linearMovieHorizontal'>
                <div className='linearMovieVertical'>
                    <div className='containerMainMovie'>
                        <div className='title'><h1>House of cards</h1></div>
                        <div className='infos'>
                            <p id='average'>8.1 pontos</p>
                            <p>2013</p>
                            <p>6 temporadas</p>
                        </div>
                        <div className='description'>"Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreendentes segredos de família – além de uma ameaça iminente à humanidade."</div>
                        <div className='btns'>
                            <Button background={'#FFF'} color={"#000"}>Assistir</Button>
                            <Button background={'#333'} color={"#FFF"}>Assistir</Button>
                        </div>
                        <div className='genres'>
                            <p>Gêneros: Drama, Comédia</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default mainMovie