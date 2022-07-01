/* eslint-disable import/no-anonymous-default-export */
const BASE_URL = 'https://api.themoviedb.org/3/'
const KEY = 'cb514e5f6f7c82758e80177dc9acb7bb'

const api = async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}&api_key=${KEY}`)
    const data = response.json()
    return data
}

const ItemsList = async() => {
    return(
      [
        {
          slug:'originals',
          title:'Originais da netflix',
          items: await api('discover/tv?language=pt-BR&with_network=213')
        },
        {
         slug:'trending',
         title:'Recomendados para você',
         items: await api('trending/all/week?language=pt-BR')
        
        }
      ]
    )
  } 

export {ItemsList}