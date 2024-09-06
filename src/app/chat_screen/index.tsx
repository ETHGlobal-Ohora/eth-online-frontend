import React, { useEffect, useState } from "react";
import { Client } from "@xmtp/react-sdk";
import { useGetSigner } from "./useGetSigner";
import Chat from "./Chat";

function ChatScreen() {
  const getSigner = useGetSigner();
  const [client, setClient] = useState<Client | null>(null);

  async function createClient() {
    const signer = await getSigner();
    const cli = await Client.create(signer, {
      env: "dev",
    });

    setClient(cli);
  }

  useEffect(() => {
    createClient();
  }, []);

  return client && <Chat client={client} />;
}

export default ChatScreen;
