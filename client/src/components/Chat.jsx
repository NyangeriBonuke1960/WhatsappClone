import React from 'react'
import ChatSectionOne from './ChatSectionOne'
import ChatSectionTwo from './ChatSectionTwo'
import { ChatProvider } from './ChatContext'

const Chat = () => {
  return (
    <ChatProvider>
      <div className='chat'>
          <ChatSectionOne />
          <ChatSectionTwo />
      </div>
    </ChatProvider>
  )
}

export default Chat