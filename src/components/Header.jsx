import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

const Header = ({showButton}) => {

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
  return (
    <div className='absolute flex justify-between w-full bg-gradient-to-b from-black px-8 py-2 z-20'>
    <img src={LOGO} alt="logo"
    className='w-48 h-20 '
      />
      {showButton && (
        <div>
        <button onClick= {handleSignOut} className={"bg-red-500 rounded-lg text-white px-2 py-4 m-2 "}>Sign out</button>
      </div>
      )}

    </div>
  )
}

export default Header
