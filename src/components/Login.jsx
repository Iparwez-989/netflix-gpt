import React from 'react'
import Header from './Header'

const Login = () => (
  <div>
    <Header />
    <div className='absolute'>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_medium.jpg" alt="bg-img" />
  </div>
  <form action="" className='absolute my-28 mx-auto right-0 left-0  border border-solid border-black flex flex-col gap-3 w-4/12 bg-gradient-to-br from-transparent bg-[#050607] opacity-80 rounded-lg'>
    <h1 className='text-white text-4xl font-bold mx-auto'>Sign In</h1>
    <input type="text" placeholder='Email or Mobile Number' className='p-3 rounded-lg w-64 mx-auto' />
    <input type="password" placeholder="Password" className='p-3 rounded-lg w-64 mx-auto'  />
    <button className='p-4 m-4 text-white bg-[#e50914] opacity-100 rounded-lg w-64 mx-auto'>Sign In</button>
    <p className='text-white mx-auto'>OR</p>
    <button className='p-4 m-4 text-white bg-[#e50914] opacity-100 rounded-lg w-64 mx-auto'>Use a sign-in code</button>
    
    <p className='text-white mx-auto'>Forgot password?</p>
  </form>
  </div>
)

export default Login
