import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Garde() {
  const [garde, setGarde] = useState([]);
  const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const d = new Date();
  var date = d.toLocaleDateString("en-US", option).replace(/,/g, " ");

  useEffect(() => {
    axios.get("http://localhost:8080/api/garde").then((response) => {
      setGarde(response.data);
    });
  }, []);
  const handleDelete = (id) => {
    if (window.confirm("do u  want to delete this garde?")) {
      axios.delete(`http://localhost:8080/api/garde/delete/${id}`).then(() => {
        setGarde(garde.filter((v) => v.id !== id));
      });
    }
 
 
    if (window.confirm("de you want to delete this garde?")) {
      axios.delete(`http://localhost:8080/api/garde/de/${id}`).then(() => {
        setGarde(garde.filter((v) => v.id !== id));
      });
    }
  };


 

  const handleEdit = (id) => {
    if (window.confirm("do u want to update  this garde?")) {
      axios.Edit(`http://localhost:8080/api/garde/delete/${id}`).then(() => {
        setGarde(garde.filter((v) => v.id !== id));
      });
    }
 
 
    if (window.confirm("do u want to update this  zone?")) {
      axios.Edit(`http://localhost:8080/api/zone/Edit/${id}`).then(() => {
        setGarde(garde.filter((v) => v.id !== id));
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-20">
        <div className="flex flex-col sm:flex-row   space-y-3 sm:space-y-0 items-center space-x-3">
          
          
        </div>

        <div className="overflow-x-auto" style={{ marginTop: '20px' }}>
        <h1 className="text-3xl font-bold mb-4 text-center">
  <span className="text-blue-800">ALL</span>{" "}
  <span className="text-red-800">Gardes</span>
</h1>
          <table className="table-auto w-full">
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th className="px-4 py-2">Id</th>
                <th className="px-4 py-2">Type</th>
                
                <th className="px-6 py-2"></th>
              </tr>
            </thead>
            <tbody>

              {garde.map((v, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {v.id}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {v.type}
                  </th>
                  <td className="px-6 py-4 dark:text-white font-medium text-center">{v.nom}</td>

                  
                  <td className="px- py-4">
                      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline items-center" onClick={() => handleDelete(v.id)}>
                                  Delete
                              </button>
                      </td>
                      <td className="px- py-4">
                      <button className="font-medium text-red-600 dark:text-red-500 hover:underline items-center" onClick={() => handleEdit(v.id)}>
                                  Edit
                              </button>
                      </td>
                </tr>
             
              ))}

            </tbody>
          </table>
        </div>
 

      </main>
    </div>
  )
}

export default Garde;