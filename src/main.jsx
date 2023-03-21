import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Players from './pages/Players/Players';
import Teams from './pages/Teams/Team';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/jogadores" element={<Players />} />
        <Route path="/times" element={<Teams />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
