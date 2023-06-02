import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function PharmacyDetails() {
  const { id } = useParams();
  const [zone, setZone] = useState([]);
  const [pharmacy, setPharmacy] = useState({});
  
const loadVilleParZone = async (p) => {
  try {
      const response = await axios.get(`http://localhost:8080/api/villes/ville/${id}/zones`);
      setZone(response.data);
    } catch (error) {
      console.error(error);
    }
 
};

  useEffect(() => {

    loadVilleParZone()
    }, [id]);
 
  return (
    <div className="min-h-screen bg-gray-100">
    <main className="container mx-auto px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Pharmacies {}</h1>
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">صيدليات الحراسة</h1>
      <main className="container mx-auto py-6 px-6 bg-slate-500 rounded-lg">
        
      </main>
      {/* Render the pharmacy details using the data in the state */}
      
    <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center" style={{marginTop:"20px"}}>Trouver une pharmacie par quartier</h1>
    <ul className="w-full" style={{marginTop:"20px"}}>
                    {zone.map((item , index) => (
                       <Link to={`/pharmacieZone/${item.id}`} key={index}>
                            <li  key={index}  className="flex flex-col sm:flex-row items-center justify-center py-4 px-6 border-b border-gray-200" >
                                <div className="flex items-center">
                                    <div className="ml-4 text-center ">
                                        <p className="text-lg font-medium text-gray-900">{item.nom}</p>
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

export default PharmacyDetails;