import React from "react";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./component/Signup";
import ButtonAppBar from "./component/navbar";
import Report from "./pages/Report";
import CustomerRegistration  from "./pages/CustomerRegistration";
import AddCustomer  from "./pages/AddCustomer";
import LoanList from "./pages/LoanList";
import Owner from "./pages/Owner";

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
        <Route path='/loan-approval/loan-list' element={<LoanList />} />
  
        <Route path='/repledge-owner' element={<  Owner/>} />
      
      </Routes>
    </BrowserRouter>
  );
}
export default App;

//<Route path='/GoldRate' element={<GoldRate />} />