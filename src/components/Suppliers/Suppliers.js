import React, { useState } from 'react'
import "./suppliers.css"
import { Link, Outlet,useNavigate } from 'react-router-dom'
import { Button } from 'bootstrap';
const Suppliers = () => {
  const navigate=useNavigate();
  const [data, setData] = useState([
    {
      name: 'John Doe',
      mobileNumber: '123-456-7890',
      email: 'johndoe@example.com',
      address: '123 Main St',
    },
    {
      name: 'Jane Smith',
      mobileNumber: '987-654-3210',
      email: 'janesmith@example.com',
      address: '456 Elm St',
    },{
      name: 'Jane Smith',
      mobileNumber: '987-654-3210',
      email: 'janesmith@example.com',
      address: '456 Elm St',
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
    <h4 className='supplyhead'>SUPPLIERS ALL</h4>
    <div className='supplypage'>
          <div className='supplubuttoncontainer'>
            <Link
             to='../supplierform' 
             className='supplyaddd'>
            <i class="fa fa-plus-square"></i>
            <h6>Add Supplier</h6>
            </Link>
            {/* <button
            onClick={handleclick}
            //  to='supplierform' 
             className='supplyaddd'>
            <h6>Add Supplier</h6>
            </button> */}
          </div>
          <h5>Supplier All Data</h5>
          <table className="table table-striped table-bordered my-4">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Mobile Number</th>
          <th>Email</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.mobileNumber}</td>
            <td>{item.email}</td>
            <td>{item.address}</td>
            <td>
              <button
                className="btn btn-primary btn-sm mx-2 editbutton"
                onClick={() => handleEdit(index)}
              >
                <i class="fa fa-edit"></i>
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm ml-2 editbutton"
                onClick={() => handleDelete(index)}
              >
                <i class="fa fa-trash-o"></i>
                Delete
              </button>
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

export default Suppliers