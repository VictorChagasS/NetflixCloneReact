import React from 'react';
import './styles.css'
const Header = () => {
    return (
        <header>
                <div className='netflixLogo'>
                    <img src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg' alt='LogoNetflix' />
                </div>
                <div className='perfil'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='perfil' />
                </div>
        </header>
    )
}

export default Header