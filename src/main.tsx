import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import MusicGrid from './components/Grid/MusicGrid.tsx';
import Grid from './components/Grid/Grid.tsx';
import './main.scss';
import { HomeScreen } from './features/home/HomeScreen.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomeScreen />}></Route>
          {/* <Route index element={<Grid />} />
          <Route path='soundboard' element={<MusicGrid />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
