import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import CoinPage from "./pages/coin";
import ComparePage from "./pages/compare";
import WatchlistPage from "./pages/watchlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useRef } from "react";
import Footer from "./components/Common/Footer/footer";

function App() {
  const cursorRef = useRef(null);
  const cursorPointerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorPointer = cursorPointerRef.current;

    const handleMouseMove = (e) => {
      if (cursor && cursorPointer) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        cursorPointer.style.left = e.clientX + "px";
        cursorPointer.style.top = e.clientY + "px";
      }
    };

    const handleMouseDown = () => {
      if (cursor && cursorPointer) {
        cursor.style.height = "0.5rem";
        cursor.style.width = "0.5rem";
        cursorPointer.style.height = "3rem";
        cursorPointer.style.width = "3rem";
      }
    };

    const handleMouseUp = () => {
      if (cursor && cursorPointer) {
        cursor.style.height = "0.3rem";
        cursor.style.width = "0.3rem";
        cursorPointer.style.height = "2rem";
        cursorPointer.style.width = "2rem";
      }
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mousedown", handleMouseDown);
    document.body.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mousedown", handleMouseDown);
      document.body.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="App">
      <div className="cursor" id="cursor" ref={cursorRef} />
      <div className="cursor-pointer" id="cursor-pointer" ref={cursorPointerRef} />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;