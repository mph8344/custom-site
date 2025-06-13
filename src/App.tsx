import { Route, Routes } from 'react-router';
// import './App.css';
import { Grid, MusicGrid } from './components/Grid';
import { SoundboardView } from './components/Soundboard/Soundboard';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<Grid />} />
      <Route path='/soundboard' index element={<SoundboardView />} />
    </Routes>
  );
}

export default App;
