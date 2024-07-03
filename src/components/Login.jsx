import React from 'react'
import Header from './Header'

const Login = () => (
  <div>
    <Header />
    <div className='absolute'>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_medium.jpg" alt="bg-img" />
  </div>
  <form action="" className='absolute py-8 px-8 my-28 mx-auto right-0 left-0  border border-solid border-black flex flex-col gap-3 w-4/12 bg-gradient-to-br from-transparent bg-[#050607] bg-opacity-80 rounded-lg'>
    <p className='text-white text-3xl font-bold mx-12'>Sign In</p>
    <input type="text" placeholder='Email or Mobile Number' className='p-3 rounded-lg w-64 mx-auto bg-[#131312] border border-gray-500' />
    <input type="password" placeholder="Password" className='p-3 bg-[#131312] rounded-lg w-64 mx-auto border border-gray-500'  />
    <button className='p-2  text-white bg-[#e50914] rounded-lg w-64 mx-auto'>Sign In</button>
    <p className='text-white mx-auto'>OR</p>
    <button className='p-2  text-white bg-[#333] rounded-lg w-64 mx-auto'>Use a sign-in code</button>
    
    <p className='text-white mx-auto'>Forgot password?</p>
    <label htmlFor="" className='text-white'>
    <input type="checkbox"  value='remember me' checked />remember me
    </label>
  </form>
  </div>
)

export default Login
