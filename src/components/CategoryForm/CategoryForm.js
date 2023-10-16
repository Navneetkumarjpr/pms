import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Outlet } from 'react-router-dom';

const CategoryForm = () => {
  const [formData, setFormData] = useState({
    categoryName:''
  });
  
  const [disableButton, setDisableButton] = useState(true)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });
    if(formData. categoryName){
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
      <h2 className='my-3'>Category Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor=" categoryName" className='fs-5'> Category Name</label>
          <input
            type="text"
            className="form-control my-2 border-2"
            id="categoryName"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleInputChange}
            // placeholder='Ente'
          />
        </div>
        
    
        <button type="submit" disabled={disableButton} className="btn btn-primary my-3">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
