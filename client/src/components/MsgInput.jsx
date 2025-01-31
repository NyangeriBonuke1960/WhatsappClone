import React from 'react'
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";

const MsgInput = () => {
  return (
    <div className='msg-input'>
        <BsEmojiSmile />
        <AiOutlinePaperClip />
        <input type='text' placeholder='Type a message'  />
        <VscSend />
    </div>
  )
}

export default MsgInput