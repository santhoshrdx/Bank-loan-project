import React from "react";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./component/Signup";

import Sidebar from "./component/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/sidebar' element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;