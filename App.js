import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Update from './views/Update';
import AuthorForm from './components/author_form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<AuthorForm />} path="/new" />
        <Route element={<Update />} path="/authors/:id/edit" />
      </Routes>
    </div>
  );
}

export default App;
