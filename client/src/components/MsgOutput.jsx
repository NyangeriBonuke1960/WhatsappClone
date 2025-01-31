import React from 'react'

const MsgOutput = () => {
    const userId = 456
    const msgId = 456
    const msgId2 = 304

  return (
    <div className='msg-output'>
        <div className={`read-msg ${msgId2 === userId ? 'read-msg-send' : 'read-msg-recieve'}`}>
            <p>You are very boring and i hate you and i dont love you anymore</p>
            <h6>6:00 AM</h6>
        </div>

        <div className={`read-msg ${msgId === userId ? 'read-msg-send' : 'read-msg-recieve'}`}>
            <p>I dont care.</p>
            <h6>6:01 AM</h6>
        </div>
    </div>
  )
}

export default MsgOutput