import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import SignUp from "./pages/SignUp";
import Layout from "./Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
