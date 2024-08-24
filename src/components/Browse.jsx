import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import GptSearchPage from './GptSearchPage';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  return (
    <div>
      <Header showButton={true} />
      {showGptSearch?<GptSearchPage /> : 
      <>
      <MainContainer />
      <SecondaryContainer />
      </>
      }
      
    </div>
  )
}

export default Browse
