import { Route, Routes } from 'react-router';
// import './App.css';
import { HomeScreen } from './features/home/HomeScreen';
import { SoundboardView } from './components/Soundboard/Soundboard';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<HomeScreen />} />
      <Route path='/soundboard' index element={<SoundboardView />} />
    </Routes>
  );
}

export default App;
