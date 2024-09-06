import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NFT from "./pages/NFT";
import Login from "./app/login/index";
import Profile from "./app/profile/index";
import ConnectCode from "./app/connect_code/index";
import Connected from "./app/connected/index";
import React from "react";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="connect-code" element={<ConnectCode />} />
          <Route path="connected" element={<Connected />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
