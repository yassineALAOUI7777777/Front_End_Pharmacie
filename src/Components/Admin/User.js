import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/user/all');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Do you want to delete that user?')) {
      axios.delete(`http://localhost:8080/api/user/delete/${id}`).then(() => {
        setUsers(users.filter((user) => user.id !== id));
      });
    }
  };

  const handleEdit = (id) => {
    if (window.confirm('Do you want to update that user?')) {
      // Perform the update operation here
      // axios.put(`http://localhost:8080/api/user/edit/${id}`).then(() => {
      //   // Handle the update logic
      // });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-20">
        <div className="overflow-x-auto" style={{ marginTop: '20px' }}>
          <h1 className="text-3xl font-bold mb-4 text-center">
            <span className="text-blue-800">ALL</span> <span className="text-red-800">Users</span>
          </h1>
          <table className="table-auto w-full">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3">Id</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Nom</th>
                <th className="px-4 py-3">Prenom</th>
                <th className="px-4 py-3">Password</th>
                <th className="px-4 py-3">Telephone</th>
                <th className="px-4 py-3">Pharmacie ID</th>
                <th className="px-6 py-2"></th>
                <th className="px-6 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.id}
                  </td>
                  <td className="px-6 py-4 dark:text-white font-medium text-center">{user.email}</td>
                  <td className="px-6 py-4 dark:text-white font-medium text-center">{user.nom}</td>
                  <td className="px-6 py-4 dark:text-white font-medium text-center">{user.prenom}</td>
                  <td className="px-6 py-4 dark:text-white font-medium text-center">{user.password}</td>
                  <td className="px-6 py-4 dark:text-white font-medium text-center">{user.telephone}</td>
                  <td className="px-6 py-4 dark:text-white font-medium text-center">{user.pharmacie_id}</td>
                  <td className="px-6 py-4">
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline items-center" onClick={() => handleDelete(user.id)}>
                      Delete
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button className="font-medium text-red-600 dark:text-red-500 hover:underline items-center" onClick={() => handleEdit(user.id)}>
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
  );
}

export default User;
