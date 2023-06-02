import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Footer from '../Footer';
import City from './City';
import Zone from './Zone';
import User from './User';
import { IoLocationSharp } from 'react-icons/io5';
import Garde from './Garde';
import CityForm from './CityForm';
import GardeForm from './GardeForm';
import ZoneForm from './ZoneForm';
import Pharmacie from './Pharmacie';

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green shadow-md" style={{ backgroundImage: 'url(	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd68V8_Egz_43nvdFRm4kasxAX9VwS4wILxw&usqp=CAU)'    }}>
        <BrowserRouter>
          {/* Navigation menu */}
          <nav className={`sm:${menuOpen ? 'block' : 'hidden'} flex`}>
            {/* Menu items go here */}
          </nav>

          {/* Main content */}
          <div class="menu-container">
            <ul class="flex flex-col items-center gap-y-4">
              <li>
                <a href="/user" class="px-3 py-2 text-teal-500 hover:text-black-700 bg-gray-500 hover:bg-black-700">
                  User
                </a>
              </li>
              <li>
                <a href="/ville" class="px-3 py-2 text-gray-600 hover:text-gray-800 bg-blue-500 hover:bg-blue-700">
                  City
                </a>
              </li>
              <li>
                <a href="/pharmacie" class="px-3 py-2 text-green-500 hover:text-green-700 bg-yellow-500 hover:bg-yellow-700">
                  Pharmacie
                </a>
              </li>
              <li>
                <a href="/zone" class="px-3 py-2 text-black-500 hover:text-red-700 bg-red-500 hover:bg-red-700">
                  Zone
                </a>
              </li>
              <li>
                <a href="/garde" class="px-3 py-2 text-purple-500 hover:text-white-700 bg-orange-500 hover:bg-black-700">
                  Garde
                </a>
              </li>
            </ul>
          </div>

          {/* Route rendering */}
          <div>
            <Routes>
              <Route path="/ville" element={<City />} />
              <Route path="/create-city" element={<CityForm />} />
              <Route path="/create-garde" element={<GardeForm />} />
              <Route path="/create-zone" element={<ZoneForm />} />
              <Route exact path="/zone" element={<Zone />} />
              <Route path="/pharmacie" element={<Pharmacie />} />
              <Route path="/garde" element={<Garde />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default Navbar;
