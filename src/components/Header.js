import React from 'react'

const Header = () => {
  return (
    <div className="absolute py-2 bg-gradient-to-b from-black to-transparent w-full h-16 md:h-20 flex items-center justify-center md:justify-start">
      <img 
        className="w-40 ml-32"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix"
      />
    </div>
  )
}

export default Header
