'use client'
import React, { useState } from 'react';
import { useFormStore } from '../state/store';
import FormDataDisplay from './FormDataDisplay';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Form = () => {
  const formData = useFormStore((state) => state.formData);
  const addFormData = useFormStore((state) => state.addFormData);
  const clearFormData = useFormStore((state) => state.clearFormData);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    age: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let formIsValid = true;
    const newErrors = {
      name: '',
      email: '',
      age: '',
    };

    if (!name) {
        newErrors.name = 'Name is required';
        toast.error('Name is required');
        formIsValid = false;
      }
  
      if (!email) {
        newErrors.email = 'Email is required';
        toast.error('Email is required');
        formIsValid = false;
      }
  
      if (!age) {
        newErrors.age = 'Age is required';
        toast.error('Age is required');
        formIsValid = false;
      }
  
      if (formIsValid) {
        const newFormData = { name, email, age };
      addFormData(newFormData);

      setName('');
      setEmail('');
      setAge('');
      toast.success('Form data added successfully');
      }
  
      setErrors(newErrors);
      toast.error('Please fill in all required fields');
  };

  return (
    <div>
    <div className="container mx-auto p-4">
      <form className="space-y-4 border border-gray-300 w-4/12 p-3 mx-auto" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="text-lg mr-3">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded-md p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-lg mr-3">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-md p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="age" className="text-lg mr-5">
            Age
          </label>
          <input
            type="number"
            id="age"
            className="border border-gray-300 rounded-md p-2"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          {errors.age && <p className="text-red-500">{errors.age}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    {formData.length > 0 && <FormDataDisplay formData={formData} />}
    <ToastContainer />
  </div>
  );
};

export default Form;
