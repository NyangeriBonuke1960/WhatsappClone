import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import { BsX } from "react-icons/bs";



const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='whats-logo'>
            <BsWhatsapp className='app-logo' />
            <p>Whatsapp</p>
        </div>
        <div>
            <BsX />
        </div>
    </div>
  )
}

export default NavBar