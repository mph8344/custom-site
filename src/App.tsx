import { Route, Routes } from 'react-router';
import './App.css';
import { Grid, MusicGrid } from './components/Grid';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<Grid />} />
      <Route path='/soundboard' index element={<MusicGrid />} />
    </Routes>
  );
}

export default App;
