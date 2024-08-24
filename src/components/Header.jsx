import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
import { toggleGptSearch } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';

const Header = ({showButton}) => {
  const showGptSearch= useSelector(store=>store.gpt.showGptSearch)
  const handleSignOut= ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(()=>{
   const unSubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          // ...
          navigate("/browse")
        } else {
          // User is signed out
          dispatch(removeUser())
          navigate("/")
          // ...
        }
      });
      // unSubscribe when component unmounts

      return ()=> unSubscribe();
},[])
  const handleGptClick = ()=>{
   dispatch(toggleGptSearch())
  }
  const handleLangChange = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className='absolute flex justify-between w-full bg-gradient-to-b from-black px-8 py-2 z-20'>
    <img src={LOGO} alt="logo"
    className='w-48 h-20 '
      />
      {showButton && (
        <div> 
          {showGptSearch&&<select className='m-4 px-3 py-2 rounded-lg' onChange={handleLangChange}>
            {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
        <button onClick={handleGptClick} className='bg-gray-600 text-white p-3 rounded-lg'>{showGptSearch?"Home":"Gpt Search"}</button>
        <button onClick= {handleSignOut} className={"bg-red-500 rounded-lg text-white p-3 m-2 "}>Sign out</button>
      </div>
      )}

    </div>
  )
}

export default Header
