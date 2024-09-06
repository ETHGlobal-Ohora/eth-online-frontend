import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NFT from "./pages/NFT";
import Login from "./app/login/index.jsx";
import Profile from "./app/profile/index.jsx";
import ConnectCode from "./app/connect_code/index.jsx";
import Connected from "./app/connected/index.jsx";
import React from "react";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="ConnectCode" element={<ConnectCode />} />
          <Route path="Connected" element={<Connected />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
