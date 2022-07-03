import React, { useEffect, useState } from 'react';
import './App.css'
import {fullTv, ItemsList} from './Services/API.js'
import MovieGroup from './Components/MoviesGroup'
import MainMovie from './Components/MainMovie';
import Header from './Components/Header';
const App = () => {
  const [listMovie, setListMovie] = useState([])
  const [randomMovie, setRandomMovie] = useState(null)

  useEffect(() => {
    const loadList = async () => {
      const listMovie = await ItemsList()
      setListMovie(listMovie)

      const originals = listMovie.filter(item=>item.slug === 'originals')[0]
      const items = originals.items.results
      const randomID = items[ Math.floor(Math.random() * (items.length)) ].id
      const randomItem = await fullTv(randomID)
      setRandomMovie(randomItem)
    
    }
    loadList()
}, [])

console.log(randomMovie)

  return (
   <>
      <Header/>
      {randomMovie && <MainMovie item={randomMovie}/>}
      <div className='allGroups'>
        {listMovie.map( (item, key) => 
            <MovieGroup key={key} infos = {item} />
        )}
      </div>
    </>
  )
}

export default App