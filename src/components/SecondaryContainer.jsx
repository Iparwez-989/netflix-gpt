import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=> store?.movies?.nowPlayingMovies)
  const popular = useSelector(store=>store?.movies?.popularMovies)
  const topRated = useSelector(store=>store?.movies?.topRatedMovies)
  const Upcoming = useSelector(store=>store?.movies?.upcomingMovies)

  return(
    <div className='w-full bg-black '>
      <div className='-mt-44 relative z-10 px-12'>
      <MovieList title={"Now Playing"} movies ={movies}  />
      <MovieList title={"Top Rated"} movies ={topRated}  />
      <MovieList title={"Popular"} movies ={popular}  />
      <MovieList title={"Upcoming"} movies ={Upcoming}  />
    </div>
    </div>
 )
}

export default SecondaryContainer
