import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { GoLock } from "react-icons/go";

const ChatHolder = () => {
  return (
    <div className='Whatsapp-logo-text'>
        <FaWhatsapp className='logo-text' />
        <h3>WhatsApp for Web</h3>
        <p>Send and recieve messages without keeping your phone online.</p>
        <p>Use whatsapp on upto 4 linked devices and 1 phone at the same time.</p>

        <div className='end-lock'>
          <GoLock />
          <p>End-to-end encrypted</p>
        </div>
      </div>
  )
}

export default ChatHolder