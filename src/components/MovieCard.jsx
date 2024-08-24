import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='flex-none w-40 '>
      <img className='w-full rounded-xl' src={IMG_CDN_URL+posterPath } alt="movie-card" />
    </div>
  )
}

export default MovieCard
