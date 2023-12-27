// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReactDomExample from './ReactDomExample';
import FormikExample from './FormikExample';
import ReduxExample from './ReduxExample';
import { Button } from 'antd';

const App = () => {
  return (
    <Router>
      <div>
        <h1>React DOM, Formik, and Redux Example</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">React DOM</Link>
            </li>
            <li>
              <Link to="/formik">Formik</Link>
            </li>
            <li>
              <Link to="/redux">Redux</Link>
            </li>
          </ul>
        </nav>
        <h1>Ant Design Example</h1>
        <Button type="primary">Primary Button</Button>
        <Routes>
          <Route path="/" element={<ReactDomExample />} />
          <Route path="/formik" element={<FormikExample />} />
          <Route path="/redux" element={<ReduxExample />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
