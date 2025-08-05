import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./Pages/Auth/Sign_Up/SignUp";
import SignIn from "./Pages/Auth/Sign_In/SignIn";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
