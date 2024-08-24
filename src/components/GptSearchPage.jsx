import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BODY_BG } from '../utils/constant';

const GptSearchPage = () => {
  return (
    <div >
      <img src={BODY_BG} className="-z-10 absolute" alt="" />
      <GptSearchBar />
      <GptMovieSuggestion />
        
    </div>
  )
}

export default GptSearchPage;
