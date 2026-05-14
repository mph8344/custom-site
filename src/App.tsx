import { Navigate, Route, Routes } from 'react-router';
import { HomeScreen } from './features/home/HomeScreen';

import './styling/global.scss';
import type React from 'react';
import type { PropsWithChildren } from 'react';

const PageNotFound = () => {
  return <div>Page not Found</div>;
};

const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='app palm'>{children}</div>;
};

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path='/' index element={<HomeScreen />} />
        {/* <Route path='/soundboard' index element={<SoundboardView />} /> */}
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
