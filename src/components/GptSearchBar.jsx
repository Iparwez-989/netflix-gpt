import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstant';

const GptSearchBar = () => {
  const langKey = useSelector(store=>store.config.lang);// it is for getting data from redux store
  return (
    <div>
        <div className=' pt-[10%] flex justify-center  '>
      <form >
        <input type="text" className='rounded-lg p-4 m-4 w-[30vw]' placeholder={lang[langKey].placeholder}/> 
        {/*Here [langkey] is used for accesing the value of the variable langkey if we'll try to fetch directly like lang.en.placeholder it will throw an error because there is nothing in lang named langkey */}
        <button className='bg-red-500 text-white px-6 py-4 m-4 rounded-lg'>{lang[langKey].search}</button>
      </form>
      </div>
    </div>
  )
}

export default GptSearchBar
