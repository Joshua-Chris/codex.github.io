import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import CodeReview from './pages/CodeReview';
import Documentation from './pages/Documentation';
import Extensions from './pages/Extensions';
import Join from './pages/Join';
import Versions from './pages/Versions';
import CodexSpace from './pages/CodexSpace';
import Apply from './pages/Apply';

const App = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/codereview" element={<CodeReview />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/codexspace" element={<CodexSpace />} />
          <Route path="/extensions" element={<Extensions />} />
          <Route path="/join" element={<Join />} />
          <Route path="/versions" element={<Versions />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
