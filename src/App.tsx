import { Navigate, Route, Routes } from 'react-router';
import { HomeScreen } from './features/home/HomeScreen';

import './styling/global.scss';

import type React from 'react';
import type { PropsWithChildren } from 'react';
import { Dashboard } from './features/home-v2/Dashboard';

const PageNotFound = () => {
  return <div>Page not Found</div>;
};

const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='app raspberry'>{children}</div>;
};

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route index element={<Dashboard />} />
        {/* <Route path='/' index element={<HomeScreen />} />
        {/* <Route path='/soundboard' index element={<SoundboardView />} /> */}
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
