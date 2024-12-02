import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarArea from "./components/shared/Navbar";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarArea />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
