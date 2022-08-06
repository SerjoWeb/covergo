import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Settings from './Pages/Settings';
import Summary from './Pages/Summary';
import Error from './Pages/Error';
import NotFound from './Pages/NotFound';

const App: React.FC = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden flex justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
