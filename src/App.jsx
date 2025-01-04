import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./compounds/navbar/Navbar";
import "./App.css";
import Home from "./pages/home/Home";
import Footer from "./compounds/footer/Footer";
export default function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<Home/>} path="/" />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}
