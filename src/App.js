import React from "react";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./component/Signup";
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Report';
import Team from './pages/Team';

import ButtonAppBar from "./component/navbar";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/sidebar' element={< ButtonAppBar/>} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/reports/reports1' element={<ReportsOne />} />
        <Route path='/reports/reports2' element={<ReportsTwo />} />
        <Route path='/reports/reports3' element={<ReportsThree />} />
        <Route path='/team' element={<Team />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;