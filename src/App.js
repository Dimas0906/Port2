import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./styles/core.scss"

import Home from "./components/home/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
