import React from 'react'
import { RiChatNewLine } from "react-icons/ri";
import { IoFilterOutline } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";
import { useChatContext } from './ChatContext'

export const ChatSectionOne = () => {
    const { setSec } = useChatContext()

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
            <input className='search-input' type='text' placeholder='Search or start a new chat' />
        </div>

        <div>
            <div className='chat-messages' onClick={() => setSec("Chats")}>
                <div className='image-div'>
                    <img src='https://th.bing.com/th/id/R.368973ed63fa8a1817e781bdf007169c?rik=g5CKYMpK9ChA%2fQ&pid=ImgRaw&r=0' alt='profilepicture' className='profile-pic' />
                </div>
                <div className='chat-div-separate'>
                    <div className='name-date'>
                        <h3>Christina</h3>
                        <p>8:30 PM</p>
                    </div>
                    <div className='msg-not'>
                        <p>You are very boring and i hate you and i dont love you anymore</p>
                        <h6>1</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatSectionOne