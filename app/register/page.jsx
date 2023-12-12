"use client"
import { useState } from 'react';
import { addUser } from '../lib/actions';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    matricNo: '',
    level: '',
    phone: '',
    address: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form data or call an API here

      addUser(formData)
      console.log('Form submitted:', formData);
      // Reset the form
      setFormData({
        username: '',
        fullName: '',
        email: '',
        password: '',
        matricNo: '',
        level: '',
        phone: '',
        address: '',
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {}; 

    // Add validation rules here
    if (!data.username.trim()) {
      errors.username = 'Username is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }

    // Add more validation rules for other fields
    //addUser()
    return errors;
  };

  return (
    <div className="flex justify-center items-center  bg-green-500">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-3xl text-green-500 mb-6 text-center">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Full name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            E-mail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Matric No
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Matric No"
            name="matricNo"
            value={formData.matricNo}
            onChange={handleChange}
          />
          {errors.matricNo && <p className="text-red-500 text-xs italic">{errors.matricNo}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          level
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
          />
          {errors.level && <p className="text-red-500 text-xs italic">{errors.level}</p>}
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Phone number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
        </div>



        


        {/* Add input fields for other form fields similarly */}

        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
