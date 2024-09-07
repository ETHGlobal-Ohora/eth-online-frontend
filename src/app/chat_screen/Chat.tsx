import {
  Client,
  Conversation,
  DecodedMessage,
  Message,
  useMessages,
  useStreamMessages,
} from "@xmtp/react-sdk";
import React, { useCallback, useEffect, useState } from "react";
import { MASTER_ADDRESS, PARTNER_ADDRESS } from "../../config";

interface ChatProps {
  client: Client;
}

export default function Chat({ client }: ChatProps) {
  const [chatroom, setChatroom] = useState<Conversation>();
  const [messages, setMessages] = useState<DecodedMessage[]>([]);
  const [text, setText] = useState<string>("");

  const me = client.address;
  const to = me === MASTER_ADDRESS ? PARTNER_ADDRESS : MASTER_ADDRESS;
  const findConversation = async () => {

    await client.conversations.newConversation(to);
    const allConversations = await client.conversations.list();

    // 최신 채팅방
    const chatroom = allConversations.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    )[0];

    setChatroom(chatroom);
    setMessages(await chatroom.messages());
  };

  // Listen to new msg
  useEffect(() => {
    if (!client) return;
    console.log(client);
    findConversation();
  }, [client]);

  useEffect(() => {
    if (!chatroom) return;
    chatroom.streamMessages().then(async (res) => {
      const newMsg = await res.next();
      setMessages((prev) => [...prev, newMsg.value]);
    });
  }, [chatroom?.topic]);

  const onSendMessage = () => {
    if (!text) return;
    if (!chatroom) return;
    chatroom.send(text);
    setText("");
  };

  const onChangeMsg = (e: any) => {
    setText(e.target.value);
  };

  return (
    <div className="h-screen">

    <div className="w-[420px] mx-auto h-full bg-white flex flex-col">
      <div className="flex flex-1 flex-col gap-2">
        {messages.map((msg) => {

          if(msg.senderAddress === me) {
            return (
              <div className="flex flex-col items-end">
                <p>Me</p>
                <p>{msg.content}</p>
                </div>
            )
          } else {
            return (
              <div className="flex">
                <p>상대</p>
                <p>{msg.content}</p>
                </div>
            )

          }
          
        })}
      </div>

      <div className="flex gap-2 p-4">
        <input className="px-1 flex-1 h-9 border border-neutral-200 rounded-xl" value={text} onChange={onChangeMsg} />
        <button
          className="bg-primary px-4 text-sm h-9 text-white rounded-xl"
          onClick={onSendMessage}
        >
          Send
        </button>
      </div>
    </div>
    </div>
  );
}
