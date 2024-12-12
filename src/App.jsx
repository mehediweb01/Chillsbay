import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import NavbarArea from "./components/shared/Navbar";
import HomePage from "./components/HomePage/HomePage";
// import Footer from "./components/shared/Footer";
import PageNotFount from "./components/PageNotFount";
import DrinkPage from "./components/DrinkPage/DrinkPage";
import ClubPage from "./components/Club/ClubPage";
import PaymentPage from "./components/payment/PaymentPage";
import { useState } from "react";
import ContactPage from "./components/contact/ContactPage";
import Warper from "./components/common/Warper";
import { data } from "./components/db";

function App() {
  const [cartItem, setCartItem] = useState([...data]);
  return (
    <>
      <BrowserRouter>
        {/* <NavbarArea cartItem={cartItem} /> */}
        <Routes>
          <Route
            path="/"
            element={
              <Warper>
                <HomePage />
              </Warper>
            }
          />
          <Route
            path="/drink"
            element={
              <Warper>
                <DrinkPage />
              </Warper>
            }
          />
          <Route
            path="/club"
            element={
              <Warper isDark>
                <ClubPage />
              </Warper>
            }
          />
          <Route
            path="/payment"
            element={
              <Warper>
                <PaymentPage cartItem={cartItem} setCartItem={setCartItem} />
              </Warper>
            }
          />
          <Route
            path="/contact"
            element={
              <Warper>
                <ContactPage />
              </Warper>
            }
          />
          <Route
            path="*"
            element={
              <Warper>
                <PageNotFount />
              </Warper>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
