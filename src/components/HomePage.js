// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import MyForm from './MyForm';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <MyForm />
      <Link to="/second-page">Go to Second Page</Link>
    </div>
  );
};

export default HomePage;