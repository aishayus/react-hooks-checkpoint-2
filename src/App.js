import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:title" element={<MovieDetail />} />
      </Routes>
  );
}

export default App;
