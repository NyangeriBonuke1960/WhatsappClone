import React from 'react'
import { GoDeviceCameraVideo } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { VscSearch } from "react-icons/vsc";
import MsgOutput from './MsgOutput';
import MsgInput from './MsgInput';

const MsgChat = () => {
  return (
    <div className='msgchat'>
        <div className='chat-header'>
            <div className='profile-name'>
                <img src='https://th.bing.com/th/id/R.368973ed63fa8a1817e781bdf007169c?rik=g5CKYMpK9ChA%2fQ&pid=ImgRaw&r=0' alt='profile-picture' />
                <p>Christina</p>
            </div>
            <div className='cam-search'>
                <div className='video-phone'>
                    <GoDeviceCameraVideo className='video-phone-icon' />
                    <FiPhone className='video-phone-icon' />
                </div>
                <VscSearch />
            </div>
        </div>

        <MsgOutput />

        <MsgInput />
    </div>
  )
}

export default MsgChat