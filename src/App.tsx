import "./index.css";
import React, { createContext, useEffect, useState } from "react";
import { AppRouter } from "./router";
import web3auth, { chainConfig, clientId, privateKeyProvider } from "./config/web3auth.config";
import { Web3Auth } from "@web3auth/modal";
import { Web3AuthProvider } from "@web3auth/modal-react-hooks";

const Web3AuthContext = createContext<Web3Auth | null>(null);
function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    web3auth
      .initModal({
        modalConfig: {},
      })
      .then(() => {
        setInit(true);
      });
  }, []);
  return init ? (
  //   <Web3AuthProvider config={{
  //     web3AuthOptions: {
  //       chainConfig: chainConfig,
  //       privateKeyProvider: privateKeyProvider,
  //       clientId: clientId
  //     }
   
  // }}>
      <AppRouter />
    // </Web3AuthProvider>
  ) : null;
}

export default App;
