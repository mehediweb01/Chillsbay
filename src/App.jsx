import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import NavbarArea from "./components/shared/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarArea />
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
