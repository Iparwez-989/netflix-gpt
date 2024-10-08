import React from 'react'
import {useSelector} from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VidBackground = ({movieId}) => {
  
    const movieTrailer = useSelector(store=> store?.movies?.movieTrailer)
    useMovieTrailer(movieId)
    
  return (
    <div className="w-full">
      <iframe 
      className='w-full aspect-video' 
      src={"https://www.youtube.com/embed/"+movieTrailer?.key+"?&autoplay=1&mute=1"} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
    </div>
  )
}

export default VidBackground
