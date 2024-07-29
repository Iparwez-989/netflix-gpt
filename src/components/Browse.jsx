import React, { useEffect } from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
const Browse = () => {
  useNowPlayingMovies();
  
  return (
    <div>
      <Header showButton={true} />
    </div>
  )
}

export default Browse
