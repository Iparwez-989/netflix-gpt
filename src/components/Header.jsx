import React from 'react'

const Header = ({showButton,onButtonClick}) => {
  return (
    <div className='absolute flex justify-between w-full bg-gradient-to-b from-black px-8 py-2 z-20'>
    <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"
    className='w-48 h-20 '
      />
      {showButton && (
        <div>
        <button onClick= {onButtonClick} className={"bg-red-500 rounded-lg text-white px-2 py-4 m-2 "}>Sign out</button>
      </div>
      )}

    </div>
  )
}

export default Header
