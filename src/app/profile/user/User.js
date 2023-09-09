// pages/index.js
import React from 'react';
import Table from '../components/Table';

const sampleData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profileImage: 'https://via.placeholder.com/50',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@example.com',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profileImage: 'https://via.placeholder.com/50',
  },
  // Add more sample data as needed
];

const User = () => {
  const handleDelete = (id) => {
    // Implement the delete functionality here
    console.log(`Deleting item with ID: ${id}`);
  };

  const handleUpdate = (id) => {
    // Implement the update functionality here
    console.log(`Updating item with ID: ${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profiles</h1>
      <Table data={sampleData} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
};

export default User;
