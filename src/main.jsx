import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Players from './pages/Players/Players';
import Teams from './pages/Teams/Team';
import RegisterTeam from './pages/RegisterTeam/RegisterTeam';
import RegisterPlayer from './pages/RegisterPlayer/RegisterPlayer';
import Match from './pages/Match/Match';
import ListMatchs from './pages/listMatchs/ListMatchs';
import CurrentMatch from './pages/CurrentMatch/CurrentMatch';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/jogadores" element={<Players />} />
        <Route path="/times" element={<Teams />} />
        <Route path="/registrarTime" element={<RegisterTeam />} />
        <Route path="/registrarJogador" element={<RegisterPlayer />} />
        <Route path="/partida" element={<Match />} />
        <Route path="/partida/:id" element={<CurrentMatch />} />
        <Route path="/listaPartidas" element={<ListMatchs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
