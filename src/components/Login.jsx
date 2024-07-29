import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from "../utils/validate.js"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BODY_BG } from '../utils/constant';

const Login = () => {
  const [isSignInForm,setIsSignInForm]= useState(true)
  const [errorMessage, setErrorMessage]= useState("")
  const dispatch = useDispatch();
  
  const handleClick = ()=> {
    setIsSignInForm(!isSignInForm)
  }
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick=()=>{
    console.log(email.current.value)
    console.log(password)
    const message = checkValidData(email.current.value,password.current.value)
    // console.log(message)
    setErrorMessage(message)

    if (message) return;
    // Logic for signIn signUp
    if(!isSignInForm){
      //============================signUp Logic================================  
      
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName} = auth.currentUser;
      dispatch(addUser
          (
        {uid:uid,
          email:email,
          displayName:displayName})
          )
      // ...
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message)
      // ...
    });
    
    // console.log(user)
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode + "-" +errorMessage)
  }); 

    }
    else{
      //=========================signIn Logic==================================

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+errorMessage)
  });
    }
  }

  return(
    <>
  <div>
    <Header />
    <div className='absolute'>
    <img src={BODY_BG} alt="bg-img" />
  </div>
  <form onSubmit={(e)=> e.preventDefault()} action="" className='absolute py-8 px-8 my-28 mx-auto right-0 left-0  border border-solid border-black flex flex-col gap-3 w-4/12 bg-gradient-to-br from-transparent bg-[#050607] bg-opacity-80 rounded-lg'>
    <p className='text-white text-3xl font-bold mx-12'>{isSignInForm? "Sign In":"Sign Up"}</p>
    {!isSignInForm && <input type="text" placeholder= "Full Name" ref={name} className='p-3 rounded-lg w-64 mx-auto bg-[#131312] border border-gray-500 text-white'/>}
    <input type="email" placeholder='Enter your Email ' ref={email} className='p-3 rounded-lg w-64 mx-auto bg-[#131312] border border-gray-500 text-white' />
    <input type="password" placeholder="Password" ref={password} className='p-3 bg-[#131312] rounded-lg w-64 mx-auto border border-gray-500 text-white'   />
    {!isSignInForm && <input type="password" placeholder="Confirm password" className='p-3 bg-[#131312] rounded-lg w-64 mx-auto border border-gray-500 text-white'   /> }
    <p className='text-red-500 mx-auto py-2 font-bold font-serif'>{errorMessage}</p>
    <button className='p-2  text-white bg-[#e50914] rounded-lg w-64 mx-auto' onClick={handleButtonClick}>{isSignInForm? "Sign In":"Sign Up"}</button>
    {isSignInForm && (
  <>
    <p className='text-white mx-auto'>OR</p>
    <button className='p-2 text-white bg-[#333] rounded-lg w-64 mx-auto'>Use a sign-in code</button>
    <p className='text-white mx-auto'>Forgot password?</p>
    <span className='text-white'><input type="checkbox" /> remember me</span>
  </>
)}


    
    
    
    <p className='text-white mx-auto'>{isSignInForm?" New to Netflix?":"Already have an account? "} <span className='font-bold hover:border-b-2 hover:border-b-white cursor-pointer ' onClick={handleClick}>{isSignInForm? "Sign Up now.":"Sign In now."}</span></p>
  </form>
  </div>
  </>)
  }


export default Login
