import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Explore from './Components/Explore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/explore" element={<Explore />} />  
      </Routes>
    </Router>
  );
}

export default App;
