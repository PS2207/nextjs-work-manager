"use client"
import React, { useState } from 'react';
import defaultImg from '../../../assets/defaultImg.png'
const ProfileForm = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    about: 'I am a software developer.',
    image: defaultImg
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = () => {
    // Add your update logic here, e.g., send the profile data to the server
    console.log('Profile Updated:', profile);
  };

  const handleDelete = () => {
    // Add your delete logic here, e.g., send a request to delete the profile
    console.log('Profile Deleted:', profile);
  };
  // default-profile-image.png
  return (
    <div className="container mx-auto max-w-sm mt-8 p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-4">
        <img
          src={profile.image || '/defaultImg.png'} // Replace this with the path to your default profile image
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Profile Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="border border-gray-300 p-2 w-full rounded-md"
          value={profile.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-gray-300 p-2 w-full rounded-md"
          value={profile.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="about" className="block text-gray-700 font-bold mb-2">
          About:
        </label>
        <textarea
          name="about"
          id="about"
          className="border border-gray-300 p-2 w-full rounded-md"
          value={profile.about}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Profile Image:
        </label>
        <input
          type="file"
          name="image"
          id="image"
          className="border border-gray-300 p-2 w-full rounded-md"
          onChange={handleImageChange}
        />
      </div>
      <div className="flex justify-between">
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
