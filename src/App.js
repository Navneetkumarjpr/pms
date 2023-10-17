import { PDFViewer } from '@react-pdf/renderer';
import './App.css';
import Admin from './components/Admin/Admin';
import AllPurchase from './components/AllPurchase/AllPurchase';
import ApprovalPurchase from './components/ApprovalPurchase/ApprovalPurchase';
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
import { Fragment } from 'react';
import StockReport from './components/StockReport/StockReport';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Fragment>

<PDFViewer width="1000" height="1000" className="app my-5" >
      <h1 className='bg-info'>hello</h1>
      <h1 className='bg-danger'>hello</h1>

      <h1 className='bg-danger'>hello</h1>
      <h1 className='bg-danger'>hello</h1>
      <h1 className='bg-danger'>hello</h1>

  </PDFViewer>
</Fragment> */}
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
            <Route path='approvalpurchase' element={<ApprovalPurchase/>}/>
            <Route path='stockreport' element={<StockReport/>}/>
          </Route>
         </Routes>
    </div>
  );
}

export default App;
