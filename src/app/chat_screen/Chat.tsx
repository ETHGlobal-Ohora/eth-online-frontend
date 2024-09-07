import {
  Client,
  Conversation,
  DecodedMessage,
} from "@xmtp/react-sdk";
import React, { useEffect, useState } from "react";
import { MASTER_ADDRESS, PARTNER_ADDRESS } from "../../config";

interface ChatProps {
  client: Client;
}

export default function Chat({ client }: ChatProps) {
  const [chatroom, setChatroom] = useState<Conversation>();
  const [messages, setMessages] = useState<DecodedMessage[]>([]);
  const [text, setText] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const activeButton = () => {
    console.log("input");
  }
  const activeEnter = (e) => {
    if(e.key === "Enter") {
      activeButton();
    }
  }

  const me = client.address;
  const to = me === MASTER_ADDRESS ? PARTNER_ADDRESS : MASTER_ADDRESS;

  const findConversation = async () => {
    await client.conversations.newConversation(to);
    const allConversations = await client.conversations.list();
    const chatroom = allConversations.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    )[0];
    setChatroom(chatroom);
    setMessages(await chatroom.messages());
  };

  useEffect(() => {
    if (!client) return;
    findConversation();
  }, [client]);

  useEffect(() => {
    if (!chatroom) return;

    const streamMessages = async () => {
      const stream = await chatroom.streamMessages();
      for await (const newMsg of stream) {
        setMessages((prev) => [...prev, newMsg]);
      }
    };

    streamMessages();
  }, [chatroom?.topic]);

  const clearMessages = () => {
    setMessages([]);
  };

  const onSendMessage = async () => {
    if (!text || !chatroom) return;

    // Send the message through XMTP
    await chatroom.send(text);

    // Append the new message to the message list
    const newMessage = {
      id: `${Date.now()}`,
      messageVersion: "v1",
      senderAddress: me,
      contentTopic: "default",
      content: text,
      sent: new Date(),
      conversation: chatroom,
    };


    setMessages((prev:any) => {
      return [...prev, newMessage];
    });

    setText("");
  };

  return (
    <div className="h-screen flex flex-col bg-white overflow-y-auto">
      <div className="chat-header flex p-4 gap-3 justify-between align-center">
        <div className="user-info flex align-center gap-3">
          <img onClick={clearMessages} src="/images/go-back.svg" alt="back image" className="go-back" />
          <img
            src="/images/profile-image.svg"
            alt="profile image"
            className="profile-pic"
          />
          <h2 className="profile-name text-blue-600 text-2xl font-extrabold">
            Alice
          </h2>
        </div>
        <div className="chat-options mt-3">
          <img src="/images/3-line.svg" alt="chat-options" className="3-line" />
        </div>
      </div>

      <hr className="bg-gray-400" />
      <div className="w-[420px] mx-auto h-full bg-white flex flex-col">
        <div className="flex flex-1 flex-col">
          {messages.map((msg) => {
            if (msg.senderAddress === me) {
              return (
                <div className="flex flex-col items-end p-3">
                  <p className="mytext rounded-2xl bg-blue-700 text-white items-start p-3">
                    {msg.content}
                  </p>
                  <p className="clock">me</p>
                </div>
              );
            } else {
              return (
                <div className="flex flex-col items-start p-3">
                  <p className="totext rounded-2xl bg-blue-100 text-black items-start p-3">
                    {msg.content}
                  </p>
                  <p className="clock">Alice</p>
                </div>
              );
            }
          })}
        </div>

        <div className="flex gap-2 p-4">
          <input
            className="px-1 flex-1 h-9 border border-neutral-200 rounded-xl"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSendMessage(); 
                setText("");
              }
            }}
          />
          <button
            className="bg-primary px-4 text-sm h-9 text-white rounded-3xl"
            onClick={() => {
              onSendMessage(); 
              setText("");
              activeButton(); 
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
