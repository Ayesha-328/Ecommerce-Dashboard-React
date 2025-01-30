import React from 'react'

const Navbar = ({title}) => {
  return (
    <header className='h-16 w-full px-4 flex items-center bg-opacity-50 backdrop-blur-md shadow-lg bg-gray-800 border-b-[1px] border-slate-700'>
<h1 className='font-semibold w-full text-gray-100 text-2xl max-w-7xl mx-auto sm:px-6 lg:px-8'>{title}</h1>
    </header>
  )
}

export default Navbar