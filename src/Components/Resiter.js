import React from "react";

import { AiOutlineCheck } from "react-icons/ai";

function Resiter() {
  return (
    <div className="flex flex-row w-full">
      <div
        className="w-1/2 h-full "
        style={{ paddingBottom: "150px", background: "#385170" }}
      >
       
        <div
          className="flex flex-col justify-center space-y-2"
          style={{ marginLeft: "30px" }}
        >
          <h2 className="font-bold text-white text-xl font-serif ">Vous n'avez pas encore de compte ?</h2>
          <h4 className="text-white">
            
          </h4>

          <div className="flex flex-row space-x-2 text-white">
            {" "}
            
              <AiOutlineCheck color="green" size={20 }/>
            <h6>  Un site internet personnalisé
            </h6>
          </div>
          <div className="flex flex-row space-x-2 text-white">

              <AiOutlineCheck color="green" size={20 }/>
              <h6> Une application mobile au nom de votre pharmacie</h6>

          </div>
          <div className="flex flex-row space-x-2 text-white">

              <AiOutlineCheck color="green" size={20 }/>
              <h6>Localisation de votre pharmacie</h6>

          </div>
        </div>
      </div>
      <div className=" w-1/2 relative flex flex-col ">
        <div
          className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-green-900  ring-2 ring-green-600 lg:max-w-xl"
          style={{ marginTop: "200px" }}
        >
          <h1 className="text-3xl font-semibold text-center text-[#94a3b8] font-serif ">
          
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-green-300 bg-white border rounded-md focus:border-green-600 focus:ring-green-300focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-green-300 bg-white border rounded-md focus:border-green-600 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
           
            <div className="mt-6">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform  rounded-md hover:bg-green-300 focus:outline-none focus:bg-green-300"
                style={{ background: "#a6d5cc" }}
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a href="#" className="font-medium text-purple-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resiter;
