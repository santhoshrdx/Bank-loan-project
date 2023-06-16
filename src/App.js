import React from "react";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./component/Signup";
import Report from "./pages/Report";
import CustomerRegistration  from "./pages/CustomerRegistration";
import AddCustomer  from "./pages/AddCustomer";
import GoldRateUpdate from "./pages/GoldRateUpdate";
import PayRoll from "./pages/PayRoll";
import Attendance from "./pages/Attendance";
import Salary from "./pages/Salary";
import Sidebar from "./component/Menubar/Sidebar.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/Sidebar' element={< Sidebar/>} />
        <Route path='/CustomerRegistration' element={<CustomerRegistration />} />
        <Route path='/report' element={<Report />} />
        <Route path='/AddCustomer' element={<AddCustomer />} />
        <Route path='/GoldRateUpdate' element={<GoldRateUpdate />} />
        <Route path='/payRoll' element={<PayRoll />} />
        <Route path='/Attendance' element={<Attendance />} />
        <Route path='/Salary' element={<Salary />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;