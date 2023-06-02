import React from "react";
import { Link, Router } from "react-router-dom";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Contact from "./Contact";
import Resiter from "./Resiter";
import Pharmacies from "./Pharmacies";
import Accueil from "./Accueil";
import Footer from "./Footer";

import Test from "./Test";
import PharmacyDetails from "./PharmacyDetails";
import PharmaciZone from "./PharmaciZone";


function Headers() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <BrowserRouter>
          <div className="container mx-auto py-4 px-6 flex justify-between items-center">
           
            <button className="sm:hidden" onClick={toggleMenu}>
              <svg viewBox="0 0 20 20" fill="currentColor" className="menu-icon w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M3 3h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div>
            <Routes>
              <Route exact path="/" element={<Accueil />} />
              <Route path="/pharmacies" element={<Pharmacies />} />
              <Route exact path="/pharmacieVille/:id" element={<PharmacyDetails />} />
              <Route path="/pharmacieZone/:id" element={<PharmaciZone />} />
              <Route path="/pharmacieVille" element={<Test />} />
              <Route path="/registre" element={<Resiter />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default Headers;