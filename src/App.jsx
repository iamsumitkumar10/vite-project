import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hireme from "./components/Hireme/Hireme.jsx";

 

function App() {
  


  return (
    <>
      <Header />
      <Home />
      <About />
   
      <Contact />
      <Hireme />
      <Footer />
    </>
  );
}

export default App;
