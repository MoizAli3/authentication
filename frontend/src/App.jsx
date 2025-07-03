import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import SignUp from "./pages/SignUp";
// import Layout from "./Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ForgetPass from "./pages/ForgetPass";
import VerifyForgetPass from "./pages/VerifyForgetPass";
import AccountVerify from "./pages/AccountVerify";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-pass" element={<ForgetPass />} />
        <Route path="/verify-forget-pass" element={<VerifyForgetPass />} />
        <Route path="/verify-account" element={<AccountVerify />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
