import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Outlet } from 'react-router-dom';

const SupplierForm = () => {
  const [formData, setFormData] = useState({
    supplierName: '',
    supplierMobile: '',
    supplierEmail: '',
    supplierAddress: '',
  });
  
  const [disableButton, setDisableButton] = useState(true)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });
    if(formData.supplierName && formData.supplierMobile && formData.supplierEmail && formData.supplierAddress){
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
      <h2 className='my-3'>Supplier Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="supplierName" className='fs-5'>Supplier Name</label>
          <input
            type="text"
            className="form-control my-2 border-2"
            id="supplierName"
            name="supplierName"
            value={formData.supplierName}
            onChange={handleInputChange}
            // placeholder='Ente'
          />
        </div>
        <div className="form-group">
          <label htmlFor="supplierMobile" className='fs-5'>Supplier Mobile</label>
          <input
            type="text"
            className="form-control my-2 border-2"
            id="supplierMobile"
            name="supplierMobile"
            value={formData.supplierMobile}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="supplierEmail" className='fs-5'>Supplier Email</label>
          <input
            type="email"
            className="form-control my-2 border-2"
            id="supplierEmail"
            name="supplierEmail"
            value={formData.supplierEmail}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="supplierAddress" className='fs-5'>Supplier Address</label>
          <textarea
            className="form-control my-2 border-2"
            id="supplierAddress"
            name="supplierAddress"
            value={formData.supplierAddress}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" disabled={disableButton} className="btn btn-primary my-3">
          Add Supplier
        </button>
      </form>
    </div>
  );
};

export default SupplierForm;
