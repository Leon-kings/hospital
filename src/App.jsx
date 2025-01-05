import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./compounds/navbar/Navbar";
import "./App.css";
import Home from "./pages/home/Home";
import Footer from "./compounds/footer/Footer";
import About1 from "./pages/about/About";
import Contact from "./pages/contact/Address";
import Login from "./pages/form/login/Login";
import Register from "./pages/form/register/Register";
export default function App() {
  return (
    <>
      <div className="container w-full xl:w-full lg:w-full">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<About1/>} path="/About" />
            <Route element={<Contact/>} path="/Contact" />
            <Route element={<Login/>} path="/Login" />
            <Route element={<Register/>} path="/Register" />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}
