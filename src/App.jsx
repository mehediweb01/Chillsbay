import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarArea from "./components/shared/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/shared/Footer";
import PageNotFount from "./components/PageNotFount";
import DrinkPage from "./components/DrinkPage/DrinkPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarArea />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drink" element={<DrinkPage />} />
          <Route path="*" element={<PageNotFount />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
