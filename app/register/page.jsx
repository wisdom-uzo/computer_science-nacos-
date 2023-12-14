"use client"
import { useState } from 'react';
import { addUser } from '../lib/actions';
import Image from 'next/image';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Link from 'next/link';

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

    if (!data.fullName.trim()) {
      errors.fullName = 'full name is required';
    }

    if (!data.matricNo.trim()) {
      errors.matricNo = 'matric number is required';
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
    <div className="flex justify-center items-center  bg-green-500 sm:px-5">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4">
      <Image height={100} width={400} alt='Nacos' src="/nacos.jpg"/>
        <h2 className="my-6 text-center text-3xl font-extrabold text-gray-900 uppercase">
        Register
          </h2>

      <div className="grid grid-cols-1 md:gap-5 md:grid-cols-2 ">
       <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <TextField 
            size='small' 
            type='text'
            label="username" 
            variant="filled"
            name="username"
            value={formData.username}
            onChange={handleChange} 
            className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

          {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Full name
          </label> 
          <TextField 
            size='small' 
            type='text'
            label="fullName" 
            variant="filled"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          
          {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            E-mail
          </label>

          <TextField 
            size='small' 
            type='email'
            label="Email" 
            variant="filled"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Password
          </label>

          <TextField 
            size='small' 
            type='password'
            label="password" 
            variant="filled"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Matric No
          </label>

          <TextField 
            size='small' 
            type='text'
            label="Matric No" 
            variant="filled"
            name="matricNo"
            value={formData.matricNo}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

          {errors.matricNo && <p className="text-red-500 text-xs italic">{errors.matricNo}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          level
          </label>

          <FormControl fullWidth>
              <InputLabel 
              id="demo-simple-select-label"> level </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="demo-simple-select"
                value={formData.level}
                label="level"
                name="level"
                size='small'
                onChange={handleChange}              
                >
                <MenuItem value="hnd 2">hnd 2</MenuItem>
                <MenuItem value="hnd 1">hnd 1</MenuItem>
                <MenuItem value="nd 2">nd 2</MenuItem>
                <MenuItem value="nd 1">nd 1</MenuItem>

              </Select>
            </FormControl>

         
          {errors.level && <p className="text-red-500 text-xs italic">{errors.level}</p>}
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Phone number
          </label>
          <TextField 
            size='small' 
            type='text'
            label="phone" 
            variant="filled"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

          {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Address
          </label>

          <TextField 
            size='small' 
            type='text'
            label="address" 
            variant="filled"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

          {errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
        </div>

        </div>

        


        {/* Add input fields for other form fields similarly */}

        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Register
          </button>

       
        </div>
        <p className="text-gray-600 mt-3 text-center">already have an account  <Link href='/login' className='text-blue-500'>login</Link> </p>
      </form>
    </div>
  );
};

export default RegisterForm;   
