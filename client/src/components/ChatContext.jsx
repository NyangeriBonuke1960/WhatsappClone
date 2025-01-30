import React, { createContext, useContext, useState } from 'react'

const ChatContext = createContext(null)

export const ChatProvider = ({ children }) => {
    const [sec, setSec] = useState('Chat-holder')

    return(
        <ChatContext.Provider value={{ sec, setSec }}>
            {children}
        </ChatContext.Provider>
    )
}

export const useChatContext = () => {
    const context = useContext(ChatContext)

    if(!context) throw new Error('useContextChat must be used within a chatprovider')
    return context
}