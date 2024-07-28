import React from 'react'
import Header from './Header'
import {signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import {  useNavigate } from 'react-router-dom';

const Browse = () => {
  const navigate = useNavigate();
  const handleSignOut= ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
  return (
    <div>
      <Header showButton={true} onButtonClick={handleSignOut}/>
    </div>
  )
}

export default Browse
