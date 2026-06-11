import { Navigate, Route, Routes } from 'react-router';
// import { HomeScreen } from './features/home/HomeScreen';

import './styling/global.scss';

import type React from 'react';
import type { PropsWithChildren } from 'react';
import { AppHeader } from './components/AppHeader/AppHeader';
import { LandingScreen } from './features/landing/LandingScreen';
import { Dashboard } from './features/dashboard/Dashboard';

const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='app raspberry'>
      <AppHeader />
      {children}
    </div>
  );
};

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route index element={<LandingScreen />} />
        <Route path='dash' element={<Dashboard />} />
        {/* <Route path='/' index element={<HomeScreen />} />
        {/* <Route path='/soundboard' index element={<SoundboardView />} /> */}
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
