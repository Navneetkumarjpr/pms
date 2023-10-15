import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Outlet } from 'react-router-dom';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerMobile: '',
    customerEmail: '',
    customerAddress: '',
    customerImage:''
  });
  
  const [disableButton, setDisableButton] = useState(true)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("hello")
    setFormData({ ...formData, [name]: value });
    if(formData.customerName && formData.customerMobile && formData.customerEmail && formData.customerAddress){
        setDisableButton(false)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the data to an API or update your state
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="container mt-4 bg-white px-3 py-3 rounded">
      <h2 className='my-3'>Customer Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customerName" className='fs-5'>Customer Name</label>
          <input
            type="text"
            className="form-control my-2 border-2"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            // placeholder='Ente'
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerMobile" className='fs-5'>Customer Mobile</label>
          <input
            type="text"
            className="form-control my-2 border-2"
            id="customerMobile"
            name="customerMobile"
            value={formData.customerMobile}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerEmail" className='fs-5'>Customer Email</label>
          <input
            type="email"
            className="form-control my-2 border-2"
            id="customerEmail"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerImage" className='fs-5'>Customer Image Url</label>
          <input
            type="email"
            className="form-control my-2 border-2"
            id="customerImage"
            name="customerImage"
            value={formData.customerImage}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerAddress" className='fs-5'>Customer Address</label>
          <textarea
            className="form-control my-2 border-2"
            id="customerAddress"
            name="customerAddress"
            value={formData.customerAddress}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" disabled={disableButton} className="btn btn-primary my-3">
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
