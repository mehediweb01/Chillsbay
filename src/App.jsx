import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarArea from "./components/shared/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarArea />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
