import React, { useState } from 'react'
import pic from "../../public/oma2.jpg"
import { IoMenuSharp } from "react-icons/io5"
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-scroll';
function Navbar() {
    const [menu, setMenu]=useState(false)

    const navItems = [
        {
            id: 1,
            text: "Home",
        },
        {
            id: 2,
            text: "About",
        },
        {
            id: 3,
            text: "Portfolio",
        },
        {
            id: 4,
            text: "Experiance",
        },
        {
            id: 5,
            text: "Contact",
        },
    ]
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16  fixed top-0 left-0 right-0 z-50 shadow-md bg-base-200 dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out'>
    <div className='flex justify-between items-center h-16'>
        <div className='flex space-x-2'>
            <img src={pic} className='h-12 w-12 rounded-full' alt="" />
            <h1 className='font-semibold text-xl cursor-pointer'>
                Omka<span className='text-green-500 text-2xl'>r</span>
            <p className='text-sm'>Web Dev</p>
            </h1>
        </div>
         {/* website dev */}
        <div>
            <ul className='hidden md:flex space-x-8'>
                {navItems.map(({id, text})=> (
                    <li className='hover:scale-105 duration-200 cursor-pointer' 
                    key={id}
                    >
                        <Link to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass="active"
                        >{text}</Link>
                    </li>
                ))}
            </ul>
            <div onClick={()=>setMenu(!menu)} className='md:hidden'>
            {menu ? <IoIosClose size={24}/> : < IoMenuSharp size={24}/>}
            </div>
        </div>
    </div>
    {/* mobile nav */}
    {menu && (
        <div className='bg-white'>
        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3'>
        {navItems.map(({id, text })=>(
            <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>
            <Link
            onClick={()=>setMenu(!menu)}
             to={text}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            >{text}</Link></li>
        ))}
        </ul>
    </div>
    )}
   </div>
   </>
  )
}

export default Navbar