import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Promo from "./Promo/Promo";
import Title from "./Title/Title";
import Services from "./Services/Services";
import Brend from "./Brend/Brend";
import Works from "./Works/Works";
import Footer from "./Footer/Footer";
import Team from "./Team/Team";
import Header from "./Header/Header";
import Price from "./Price/Price";
import Contact from "./Contact/Contact";


// function App() {
//   return (
//     <>
//       <Title />
//       <Promo/>
//       <Services/>
//       <Brend/>
//       <Works/>
//       <Footer/>
//     </>
//   );
// }

function Home() {
  return (
    <>
      <Title />
      <Promo/>
      <Services/>
      <Brend/>
      <Works/>
      <Footer/>
    </>
  );
}

function Teams() {
  return (
    <>
     <Header/>
     <Team/>
      <Footer/>
    </>
  );
}

function Prices() {
  return (
    <>
     <Header/>
     <Price/>
      <Footer/>
    </>
  );
}

function Contacts() {
  return (
    <>
     <Header/>
     <Contact/>
      <Footer/>
    </>
  );
}
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/price" element={<Prices />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
