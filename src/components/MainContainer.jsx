import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from "./VideoTitle"
import VidBackground from "./VidBackground"

const MainContainer = () => {
    const movies = useSelector(store=>store?.movies?.nowPlayingMovies)

    if(movies === null) return      //or we can write (if(!movies))
    const mainMovie = movies[0]
    // console.log(mainMovie)

    const {original_title, overview,id} = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VidBackground movieId={id} />
    </div>
  )
}

export default MainContainer
