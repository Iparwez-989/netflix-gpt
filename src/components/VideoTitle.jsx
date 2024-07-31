import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-44 px-12 absolute bg-gradient-to-r from-black w-full aspect-video text-white'>
      
      <p className='text-3xl font-bold'>{title}</p>
      <p className='w-1/4 text-md my-3'>{overview}</p>
      <div>
        <button className='bg-white text-black px-12 py-3 text-xl rounded-lg hover:bg-opacity-50'> {'>'} Play</button>
        <button className='bg-gray-400 px-10 py-3 text-xl rounded-lg mx-2 bg-opacity-30 '>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
