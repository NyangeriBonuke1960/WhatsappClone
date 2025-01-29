import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Chat from '../components/Chat'
import Calls from '../components/Calls'
import Status from '../components/Status'
import StarredMessages from '../components/StarredMessages'
import Archived from '../components/Archived'

const Home = () => {
    const [activeComponent, setActiveComponent] = useState("Chat")

    const renderComponent = () => {
        switch(activeComponent){
            case "Chat":
                return <Chat />;
            case "Call":
                return <Calls />;
            case "Status":
                return <Status />;
            case "Starred":
                return <StarredMessages />;
            case "Archived": 
                return <Archived />;
            default:
                return <div>Navigate here</div>;
        }
    }

  return (
    <div className='home'>
        <NavBar />
        <div className='homebody'>
            <SideBar setActiveComponent={setActiveComponent} />
            <div className='otherside'>{renderComponent()}</div>
        </div>
    </div>
  )
}

export default Home