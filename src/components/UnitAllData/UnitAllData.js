import React, { useState } from 'react'
// import "./managecustomers.css"
import { Link, Outlet,useNavigate } from 'react-router-dom'
import { Button } from 'bootstrap';
const UnitAllData = () => {
    const navigate=useNavigate();
  const [data, setData] = useState([
    {
      name: 'John Doe',
      mobileNumber: '123-456-7890',
      img:"https://media.istockphoto.com/id/1443305526/photo/young-smiling-man-in-headphones-typing-on-laptop-keyboard.jpg?s=2048x2048&w=is&k=20&c=YbyIE-QkVeacJODEhS5_LQzJahwiTmZTnism-xUwCLA=",
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
    <h4 className='supplyhead'>UNIT ALL</h4>
    <div className='supplypage'>
          <div className='supplubuttoncontainer'>
            <Link
             to='../customerform' 
             className='supplyaddd'>
            <i class="fa fa-plus-square"></i>
            <h6>Add Unit</h6>
            </Link>
            {/* <button
            onClick={handleclick}
            //  to='supplierform' 
             className='supplyaddd'>
            <h6>Add Supplier</h6>
            </button> */}
          </div>
          <h5>Unit All Data</h5>
          <table className="table table-striped table-bordered my-4">
      <thead>
        <tr>
          <th width="10%">S.No</th>
          <th width="70%">Name</th>
          <th width="20%">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>
              <button
                className="btn btn-primary btn-sm mx-2 editbutton text-center"
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

export default UnitAllData