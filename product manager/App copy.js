import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/prod_detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Detail />} path="/product/:id" />
        <Route element={<Update />} path="/products/:id/edit" />
      </Routes>
    </div>
  );
}

export default App;
