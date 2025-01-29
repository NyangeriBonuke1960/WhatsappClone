import React from 'react'
import { RiChatNewLine } from "react-icons/ri";
import { IoFilterOutline } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";

export const ChatSectionOne = () => {
  return (
    <div className='section1'>
        <div className='chat-section'>
            <h3>Chats</h3>
            <div className='lines'>
                <RiChatNewLine className='lines-logo' />
                <IoFilterOutline className='lines-logo' />
            </div>
        </div>

        <div className='search-div'>
            <LiaSearchSolid />
            <p>Search or start a new chat</p>
        </div>

        <div>
            <div className='chat-messages'>
                <div className='image-div'>
                    <p>Image</p>
                </div>
                <div className='chat-div-separate'>
                    <div className='name-date'>
                        <h3>Paul</h3>
                        <p>8:30 PM</p>
                    </div>
                    <div>
                        <p>You are very boring</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatSectionOne