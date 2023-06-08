import React from "react";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./component/Signup";
import ButtonAppBar from "./component/Navbar";
import Report from "./pages/Report";
import CustomerRegistration  from "./pages/CustomerRegistration";
import AddCustomer  from "./pages/AddCustomer";

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
<<<<<<< HEAD
        
=======
       
>>>>>>> 469ae9d592663afa75eb8760097c780449feb7f2
      </Routes>
    </BrowserRouter>
  );
}
export default App;

//<Route path='/GoldRate' element={<GoldRate />} />