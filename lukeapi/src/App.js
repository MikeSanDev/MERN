import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

import SearchBar from './views/SearchBar';

import People from './components/People';
import Planet from './components/Planet';
import Error from './components/Error'

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Routes>
        <Route element={<People />} path="/people/:id" />
        <Route element={<Planet />} path='/planet/:id' />
        <Route component={<Error />} />
      </Routes>
    </div>
  );
}

export default App;