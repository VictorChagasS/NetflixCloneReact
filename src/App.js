import React, { useEffect, useState } from 'react';
import './App.css'
import {ItemsList} from './Services/API.js'
import MovieGroup from './Components/MoviesGroup'
import MainMovie from './Components/MainMovie';
import Header from './Components/Header';
const App = () => {
  const [listMovie, setListMovie] = useState([])
  useEffect(() => {
    const loadList = async () => {
      const listMovie = await ItemsList()
      setListMovie(listMovie)
    }
    loadList()
}, [])

console.log(listMovie)
  return (
   <>
      <Header/>
      <MainMovie/>
      <div className='allGroups'>
      {listMovie.map( (item, key) => 
          <MovieGroup key={key} infos = {item} />
      )}
      </div>
    </>
  )
}

export default App