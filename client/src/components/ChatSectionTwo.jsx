import React from 'react'
import ChatHolder from './ChatHolder';
import MsgChat from './MsgChat';
import { useChatContext } from './ChatContext'

const ChatSectionTwo = () => {
  const { sec } = useChatContext()

  const selectSection = () => {
      switch(sec){
        case 'Chat-holder':
          return <ChatHolder />;
        case 'Chats':
          return <MsgChat />
        default:
          return <ChatHolder />
      }
  }

  return (
    <div className='section2'>
      {selectSection()}
    </div>
  )
}

export default ChatSectionTwo