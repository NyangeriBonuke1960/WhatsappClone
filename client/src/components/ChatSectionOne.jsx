import React from 'react'
import { RiChatNewLine } from "react-icons/ri";
import { IoFilterOutline } from "react-icons/io5";

export const ChatSectionOne = () => {
  return (
    <div className='section1'>
        <div className='chat-section'>
            <h3>Chats</h3>
            <div>
                <RiChatNewLine />
                <IoFilterOutline />
            </div>
        </div>
    </div>
  )
}

export default ChatSectionOne