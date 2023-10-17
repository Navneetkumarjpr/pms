import React, { useState } from 'react'
// import "./allpurchase.css"
import { Link, Outlet,useNavigate } from 'react-router-dom'
import { Button } from 'bootstrap';
const ApprovalPurchase = () => {
  const navigate=useNavigate();
  const [data, setData] = useState([
    {
      name: 'John Doe',
      mobileNumber: '123-456-7890',
      purchaseNumber:'12',
      purchaseDate:'27-04-2002',
      supplier:'prateek',
      Category:'Manik',
      quantity:'23',
      productName:'Biscuit',
      status:'Pending',
      email: 'johndoe@example.com',
      address: '123 Main St',
    },
    {
        name: 'John Doe',
        mobileNumber: '123-456-7890',
        purchaseNumber:'12',
        purchaseDate:'27-04-2002',
        supplier:'prateek',
        Category:'Manik',
        quantity:'23',
        productName:'Biscuit',
        status:'Pending',
        email: 'johndoe@example.com',
        address: '123 Main St',
    },{
        name: 'John Doe',
        mobileNumber: '123-456-7890',
        purchaseNumber:'12',
        purchaseDate:'27-04-2002',
        supplier:'prateek',
        Category:'Manik',
        quantity:'23',
        productName:'Biscuit',
        status:'Pending',
        email: 'johndoe@example.com',
        address: '123 Main St',
    }
    // Add more data as needed
  ]);

  
  const handleEdit = (index) => {
    // Implement the edit action here
    console.log('Edit:', index);
  };

  const handleRight = (index) => {
    // Implement the delete action here
    console.log('Delete:', index);
    navigate('../allpurchase')
  };

  return (
    <>
    <h4 className='supplyhead'>PURCHASE ALL</h4>
    <div className='supplypage'>
          <div className='supplubuttoncontainer'>
            <Link
             to='../purchaseform' 
             className='supplyaddd'>
            <i class="fa fa-plus-square"></i>
            <h6>Add Purchase</h6>
            </Link>
            {/* <button
            onClick={handleclick}
            //  to='supplierform' 
             className='supplyaddd'>
            <h6>Add Supplier</h6>
            </button> */}
          </div>
          <h5>Purchase All Pending Data</h5>
          <table className="table table-striped table-bordered my-4">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Purchase No</th>
          <th>Date</th>
          <th>Supplier</th>
          <th>Category</th>
          <th>Qty</th>
          <th>Product Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.purchaseNumber}</td>
            <td>{item.purchaseDate}</td>
            <td>{item.supplier}</td>
            <td>{item.Category}</td>
            <td>{item.quantity }</td>
            <td>{item.productName}</td>
            <td><h5 className={`${item.status.includes("Pending") && "pendingbuttoncolor"}`}>{item.status}</h5></td>
            <td>
              {/* <button
                className="btn btn-primary btn-sm mx-2 editbutton"
                onClick={() => handleEdit(index)}
              >
                <i class="fa fa-edit"></i>
                Edit
              </button> */}
             {item.status.includes("Pending") && <button
                className="btn btn-danger btn-sm ml-2 editbutton"
                onClick={() => handleRight(index)}
              >
               
<i class="fa fa-check"></i>
                Approve
              </button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    {/* <Outlet/> */}
    </>
  )
}

export default ApprovalPurchase