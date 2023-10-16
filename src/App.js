import './App.css';
import Admin from './components/Admin/Admin';
import AllPurchase from './components/AllPurchase/AllPurchase';
import CategoryForm from './components/CategoryForm/CategoryForm';
import CustomerForm from './components/CustomerForm/CustomerForm';
import HomePage from './components/Home/HomePage';
import ManageCustomers from './components/ManageCustomers/ManageCustomers';
import ManageProduct from './components/ManageProduct/ManageProduct';
import ManageProductForm from './components/ManageProductForm/ManageProductForm';
import Navbar from './components/Navbar/Navbar';
import PurchaseForm from './components/PurchaseForm/PurchaseForm';
import SupplierForm from './components/SupplierForm/SupplierForm';
import Suppliers from './components/Suppliers/Suppliers';
import UnitAllData from './components/UnitAllData/UnitAllData';
import UnitForm from './components/UnitForm/UnitForm';
import Category from './components/category/Category';
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
            <Route path='unitform' element={<UnitForm/>}/>
            <Route path='category' element={<Category/>}/>
            <Route path='categoryform' element={<CategoryForm/>}/>
            <Route path='manageproduct' element={<ManageProduct/>}/>
            <Route path='manageproductform' element={<ManageProductForm/>}/>
            <Route path='allpurchase' element={<AllPurchase/>}/>
            <Route path='purchaseform' element={<PurchaseForm/>}/>
          </Route>
         </Routes>
    </div>
  );
}

export default App;
