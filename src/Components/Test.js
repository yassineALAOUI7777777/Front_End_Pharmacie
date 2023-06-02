import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function List() {
    const [searchTerm, setSearchTerm] = useState("");
    const [ville, setVille] = useState([]);
 
  
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        const filteredList = ville.filter(item =>
            item.nom.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())
        ).slice(0, -1);
        setVille(filteredList)

    };
  
                          

    const loadVille = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/villes");
            setVille(response.data);
          } catch (error) {
            console.error(error);
          }
       
      };
     useEffect(() => {
    loadVille();
  }, []);
     
      
    return (
        <div className="min-h-screen bg-gray-100">
            <main className="container mx-auto px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-20">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center"> Pharmacies du Maroc- Toutes Les Régions</h1>
                <main className="container mx-auto py-6 px-6 bg-slate-500 rounded-lg">
        <p className="text-gray-900 leading-relaxed mb-8 text-center">
                </p>
       
      </main>
                <div className="flex  justify-center mb-4  "style={{marginTop:"30px"}}>
                    <input
                        type="text"
                        placeholder="Recherchez une région..."
                        value={searchTerm}
                        onChange={handleChange}
                        className="px-4 py-2 border p border-gray-300  rounded-lg focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <ul className="w-full">
                    {ville.map((item, index) => (
                        <Link to={`/pharmacieVille/${item.id}`} key={index}>
                            <li  key={index}  className="flex flex-col sm:flex-row items-center justify-center py-4 px-6 border-b border-gray-200" >
                                <div className="flex items-center">
                                    <div className="ml-4 text-center ">
                                        <p className="text-lg font-medium text-gray-900">{item.nom} </p>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>

            </main>
            
        </div>
    );
}

export default List;
