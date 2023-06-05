import React from "react";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./component/Signup";
import ButtonAppBar from "./component/Navbar";
import Report from "./pages/Report";
import CustomerRegistration  from "./pages/CustomerRegistration";
import AddCustomer  from "./pages/AddCustomer";
import GoldRate from './pages/GoldRate';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/sidebar' element={< ButtonAppBar/>} />
        <Route path='/CustomerRegistration' element={<CustomerRegistration />} />
        <Route path='/report' element={<Report />} />
        <Route path='/AddCustomer' element={<AddCustomer />} />
        <Route path='/GoldRate' element={<GoldRate />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;