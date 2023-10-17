import React, { useState } from 'react'
import "./stockreport.css"
import { Link, Outlet,useNavigate } from 'react-router-dom'
import { Button } from 'bootstrap';
const StockReport = () => {
  const navigate=useNavigate();
  const [data, setData] = useState([
    {
      sno: '1',
      supplierName: 'Browser',
      unit: 'KG',
      category: 'Cement',
      productName:'KSRM Steel',
      inQty:'10',
      outQty:'5',
    },
    {
        sno: '2',
      supplierName: 'Browser',
      unit: 'KG',
      category: 'Cement',
      productName:'KSRM Steel',
      inQty:'10',
      outQty:'5',
    },{
        sno: '3',
      supplierName: 'Browser',
      unit: 'KG',
      category: 'Cement',
      productName:'KSRM Steel',
      inQty:'10',
      outQty:'5',
    }
    // Add more data as needed
  ]);

  
  const handleEdit = (index) => {
    // Implement the edit action here
    console.log('Edit:', index);
  };

  const handleDelete = (index) => {
    // Implement the delete action here
    console.log('Delete:', index);
  };

  return (
    <>
    <h4 className='supplyhead'>STOCK REPORT ALL</h4>
    <div className='supplypage'>
          <div className='supplubuttoncontainer'>
            {/* <Link
             to='../supplierform' 
             className='supplyaddd'>
            <i class="fa fa-plus-square"></i>
            <h6>Add Supplier</h6>
            </Link>
             */}
          </div>
          <h5>Stock Report</h5>
          <table className="table table-striped table-bordered my-4">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Supplier Name</th>
          <th>Unit</th>
          <th>Category</th>
          <th>Product Name</th>
          <th>In Qty</th>
          <th>Out Qty</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.supplierName}</td>
            <td>{item.unit}</td>
            <td>{item.category}</td>
            <td>{item.productName}</td>
            <td><h5 className='inquantity'>{item.inQty}</h5></td>
            <td><h5 className='outquantity'>{item.outQty}</h5></td>
            <td><h5 className='stock'>{item.inQty-item.outQty}</h5></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    {/* <Outlet/> */}
    </>
  )
}

export default StockReport