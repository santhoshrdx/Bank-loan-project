import React from "react";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./component/Signup";
import Report from "./pages/Report";
import CustomerRegistration  from "./pages/CustomerRegistration";
import Employee  from "./pages/Employee";
import AddCustomer  from "./pages/AddCustomer";
import GoldRateUpdate from "./pages/GoldRateUpdate";
import PayRoll from "./pages/PayRoll";
import Attendance from "./pages/Attendance";
import Salary from "./pages/Salary";
import Sidebar from "./component/Menubar/Sidebar.jsx";
import EmployeeRegistration from "./pages/EmployeeRegistration";
import CustomerList from "./pages/CustomerList";
import LoanProcess from "./pages/LoanProcess";
import Owner from "./pages/Owner";
import Repledge_customer from "./pages/Repledge_Customer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/Sidebar' element={< Sidebar/>} />
        <Route path='/CustomerRegistration' element={<CustomerRegistration />} />
        <Route path='/Employee' element={<Employee />} />
        <Route path='/report' element={<Report />} />
        <Route path='/AddCustomer' element={<AddCustomer />} />
        <Route path='/CustomerList' element={<CustomerList/>} />
        <Route path='/GoldRateUpdate' element={<GoldRateUpdate />} />
        <Route path='/payRoll' element={<PayRoll />} />
        <Route path='/Attendance' element={<Attendance />} />
        <Route path='/Salary' element={<Salary />} />
        <Route path='/EmployeeRegistration' element={<EmployeeRegistration />} />
        <Route path='/LoanProcess' element={<LoanProcess />} />
        <Route path='/Owner' element={<Owner />} />
        <Route path='/Repledge_Customer' element={<Repledge_customer />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;