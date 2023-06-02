import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function GardeForm() {
    const [type, setType] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post("http://localhost:8080/api/garde/save", { type }).then(() => {
        navigate("/garde");
      });
    };
  
    return (
      <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-20">
      <h2>Create Garde</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Type:</label>
            <input
               type="text"
               placeholder="Entre une ville"
              className="form-control"
              id="name"
              value={type}
              onChange={(event) => setType(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
          </main>
          </div>
    
    );
  };

export default GardeForm