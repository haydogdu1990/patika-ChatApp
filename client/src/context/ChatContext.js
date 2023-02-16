import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    { messages: "Selam" },
    { messages: "Naber?" },
  ]);

  const values = {
    messages,
    setMessages,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const useChat = () => useContext(ChatContext);
