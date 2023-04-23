import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Book from './components/bookhomepage';
import Add from './components/addbook';
import View from './components/viewbook';
import Edit from './components/editbook';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/book' element={<Book />} />
          <Route path='/add' element={<Add />} />
          <Route path='/view' element={<View />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

