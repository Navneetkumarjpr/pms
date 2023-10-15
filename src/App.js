import './App.css';
import Admin from './components/Admin/Admin';
import CustomerForm from './components/CustomerForm/CustomerForm';
import HomePage from './components/Home/HomePage';
import ManageCustomers from './components/ManageCustomers/ManageCustomers';
import Navbar from './components/Navbar/Navbar';
import SupplierForm from './components/SupplierForm/SupplierForm';
import Suppliers from './components/Suppliers/Suppliers';
import UnitAllData from './components/UnitAllData/UnitAllData';
import Dashboard from './components/dashboard/Dashboard';
import LoginForm from './components/login/LoginForm';
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes> 
          <Route path='/' element={<HomePage/>}/>
          <Route path='login' element={<LoginForm/>}></Route>
          <Route path='admin/*' element={<Admin/>}>
            <Route path='' element={<Dashboard/>} />
            <Route path='suppliers' element={<Suppliers/>}/>
            <Route path='supplierform' element={<SupplierForm/>} />
            <Route path='customers' element={<ManageCustomers/>}/>
            <Route path='customerform' element={<CustomerForm/>}/>
            <Route path='unitalldata' element={<UnitAllData/>}/>
          </Route>
         </Routes>
    </div>
  );
}

export default App;
