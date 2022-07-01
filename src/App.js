import React, { useEffect, useState } from 'react';
import './App.css'
import {ItemsList} from './Services/API.js'
import MovieGroup from './Components/MoviesGroup/index.js'
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
   <div className='container'>
      Header
      Destaque
      {listMovie.map(item => 
      
        <div>
          <MovieGroup infos = {item} />
        </div>)}
  </div>
  )
}

export default App