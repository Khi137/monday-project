// src/FormikExample.js
import React from 'react';
import { useFormik } from 'formik';

const FormikExample = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    },
  });

  return (
    <div>
      <h1>Formik Example</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikExample;