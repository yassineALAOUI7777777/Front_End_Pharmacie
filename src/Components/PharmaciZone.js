import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function PharmaciZone() {
    const [garde , setGarde]= useState([]);
    const { id } = useParams();
    const loadGarde = async()=>{
        try{
            const response = await axios.get('http://localhost:8080/api/garde')
            setGarde(response.data)
        }catch (error){
            console.log(error)
        }
    }
    useEffect(()=>{
        loadGarde();
    },[])
  return (
    <div className="min-h-screen bg-gray-100">
    <main className="container mx-auto px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Pharmacies zone{}</h1>
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">صيدليات الحراسة</h1>
      <main className="container mx-auto py-6 px-6 bg-slate-500 rounded-lg">
        <p className="text-gray-900 leading-relaxed mb-8 text-center">
            </p>
       
      </main>
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center" style={{marginTop:"20px"}}>Voici les pharmacie</h1>
      <div className="flex flex-col lg:flex-row items-center  justify-center lg:justify-between mx-auto max-w-screen-lg" style={{marginTop: '20px'}}>
      {garde.map((item , index) => (
        <div key={index} className="w-full lg:w-1/2 p-4 border border-black rounded-lg ">
        <h1 className="text-xl font-semibold text-center mb-4" >{item.type}</h1>
      </div>
       ))}
    </div>
    <div
  className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <a href="#!">
    <img
      className="rounded-t-lg"
      src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
      alt="" />
  </a>
  <div className="p-6">
    <h5
      className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      Card title
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <button
      type="button"
      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init
      data-te-ripple-color="light">
      Button
    </button>
  </div>
</div>
      </main>
      </div>
  )
}

export default PharmaciZone