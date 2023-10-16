import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import { Form } from "react-bootstrap";
const ManageProductForm = () => {
    const [supplier, setSupplier] = useState("");
    const [unit, setUnit] = useState("");
    const [category, setCategory] = useState("Dictamen");
  const [formData, setFormData] = useState({
    manageproductName:'',
    supplier:'',
    unit:'',
    category:''
  });
  
  const [disableButton, setDisableButton] = useState(true)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });
    console.log(formData)
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the data to an API or update your state
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="container mt-4 bg-white px-3 py-3 rounded">
      <h2 className='my-3'>Manage Product Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor=" categoryName" className='fs-5'>Product Name</label>
          <input
            type="text"
            className="form-control my-2 border-2"
            id="manageproductName"
            name="manageproductName"
            value={formData.manageproductName}
            onChange={handleInputChange}
            // placeholder='Ente'
          />
        </div>
        <Form.Group controlId="formBasicSelect">
        <Form.Label className='fs-5'>Select Supplier</Form.Label>
        <Form.Control
        className='my-2'
          as="select"
          value={formData.supplier}
          name='supplier'
        //   onChange={e => {
        //     console.log("e.target.value", e.target.name);
        //     setSupplier(e.target.value);
        //   }}
        onChange={handleInputChange}

        >
          <option value="DICTUM">Dictamen</option>
          <option value="CONSTANCY">Constancia</option>
          <option value="COMPLEMENT">Complemento</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicSelect1">
        <Form.Label className='fs-5'>Select Unit</Form.Label>
        <Form.Control
        className='my-2'
          as="select"
          name='unit'

          value={formData.unit}
        onChange={handleInputChange}

        //   onChange={e => {
        //     console.log("e.target.value", e.target.value);
        //     setUnit(e.target.value);
        //   }}
        >
          <option value="DICTUM">Dictamen</option>
          <option value="CONSTANCY">Constancia</option>
          <option value="COMPLEMENT">Complemento</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicSelect">
        <Form.Label className='fs-5'>Select Category</Form.Label>
        <Form.Control
        className='my-2 fs-6'
        name='category'
          as="select"
          value={formData.category}
        onChange={handleInputChange}

        //   onChange={e => {
        //     console.log("e.target.value", e.target.value);
        //     setCategory(e.target.value);
        //   }}
        >
          <option value="DICTUM">Dictamen</option>
          <option value="CONSTANCY">Constancia</option>
          <option value="COMPLEMENT">Complemento</option>
        </Form.Control>
      </Form.Group>
        
    
        <button type="submit" disabled={disableButton} className="btn btn-primary my-3">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ManageProductForm;
