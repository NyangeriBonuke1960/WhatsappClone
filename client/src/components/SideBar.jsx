import React from 'react'
import { BsChat } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { FiStar } from "react-icons/fi";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { GoDash } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";

const SideBar = ({ setActiveComponent }) => {
  return (
    <div className='sidebar'>
        <div className='sidebar-1'>
            <FiMenu className='sidebar1-logo' />
            <BsChat className='sidebar1-logo' onClick={() => setActiveComponent("Chat")} />
            <IoCallOutline className='sidebar1-logo' onClick={() => setActiveComponent("Call")} />
            <HiOutlineStatusOnline className='sidebar1-logo' onClick={() => setActiveComponent("Status")} />
        </div>
        <div className='sidebar-2'>
            <FiStar className='sidebar2-logo' onClick={() => setActiveComponent("Starred")} />
            <HiOutlineArchiveBox className='sidebar2-logo' onClick={() => setActiveComponent("Archived")} />
            <GoDash />
            <CiSettings className='sidebar2-logo' />
            <MdAccountCircle className='sidebar2-logo' />
        </div>
    </div>
  )
}

export default SideBar