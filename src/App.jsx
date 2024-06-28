import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { homeRoute, signInRoute, signUpRoute } from './Routes/index';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          {homeRoute.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
          {signInRoute.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
          {signUpRoute.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
