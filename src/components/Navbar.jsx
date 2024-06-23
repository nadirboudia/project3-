import React from 'react'
import logo from '../assets/logo.png'

const Navbar= () => {
 const navItems = [
    { id: 1, label: "Features", href: "#" },
    { id: 2, label: "Workflow", href: "#" },
    { id: 3,label: "Pricing", href: "#" },
    {  id: 4,label: "Testimonials", href: "#" },
  ];
  
  return (
    <div className=' px-5   sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
      <div className='flex  justify-between '>
      <div className='flex   items-center'>
            <img className='h-10 w-10 mr-2 ' src={logo} alt="logo" />
            <span className='text-xl tracking-tight'>VirtualR</span>
        </div>
       <div className='flex justify-center items-center  '>
       <ul className= ' hidden lg:flex justify-center items-center    space-x-12 '>
        {navItems.map(( item ) =>  (
            <li key ={item.id}>
                <a href={item.href}>{item.label}</a>
            </li>
        ))}      
        </ul>
       </div>
       
        <div className='flex space-x-5 justify-between'>
          <span className=' hidden lg:flex justify-center items-center space-x-2'>
             <a href="#" className='py-2 px-3 border rounded-md'>sign in</a> 
          </span>
          <span className='hidden lg:flex justify-center items-centerspace-x-2'>
            <a href="#" className='py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Create an account</a>
          </span> 
        </div>


    </div>

    
    </div>
  )
}

export default Navbar;
