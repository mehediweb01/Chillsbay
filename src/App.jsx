import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarArea from "./components/shared/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/shared/Footer";
import PageNotFount from "./components/PageNotFount";
import DrinkPage from "./components/DrinkPage/DrinkPage";
import ClubPage from "./components/Club/ClubPage";
import PaymentPage from "./components/payment/PaymentPage";
import { useState } from "react";
import ContactPage from "./components/contact/ContactPage";

function App() {
  const [cartItem, setCartItem] = useState([
    {
      id: 1,
      image: "/productImage1.png",
      title: "The 90s with Dj Neptune",
      price: 4500000,
      quantity: 1,
      date: "Dec 12 2024",
      location: "Quilox Club",
      time: "9:00 PM ",
    },
    {
      id: 2,
      image: "/productImage2.png",
      title: "Water Sports at Ikoyi Bay ",
      price: 9000000,
      quantity: 1,
      date: "Dec 12 2024",
      location: "Quilox Club",
      time: "10:00 PM ",
    },
  ]);
  return (
    <>
      <BrowserRouter>
        <NavbarArea cartItem={cartItem} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drink" element={<DrinkPage />} />
          <Route path="/club" element={<ClubPage />} />
          <Route
            path="/payment"
            element={
              <PaymentPage cartItem={cartItem} setCartItem={setCartItem} />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<PageNotFount />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
