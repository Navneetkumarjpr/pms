import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import axios, { formToJSON } from 'axios';
import "./purchaseform.css"
const PurchaseForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    purchaseNo: '',
    supplierName: '',
    categoryName: '',
    productName: '',
    status:'Pending'
  });

  const [purchaseItems, setPurchaseItems] = useState([
    {
        qty: '',
      unitPrice: '',
      description: '',
      totalPrice: '',
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setFormData({ ...formData, [name]: value });
  };

  const handleItemChange = (index, name, value) => {
    const updatedItems = [...purchaseItems];
    updatedItems[index] = { ...updatedItems[index], [name]: value };
    setPurchaseItems(updatedItems);
  };

  const handleAddItem = () => {
    setPurchaseItems([...purchaseItems, { qty: '', unitPrice: '', description: '', totalPrice: '' }]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...purchaseItems];
    updatedItems.splice(index, 1);
    setPurchaseItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the data using Axios to your server
    const dataToSend = { ...formData, items: purchaseItems };
    // axios.post('your-api-endpoint', dataToSend)
    //   .then((response) => {
    //     console.log('Data sent successfully', response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error sending data:', error);
    //   });
    // console.log(dataToSend)
    window.print()
    console.log("hello")
  };

  return (
    <div className="container mt-4">
      <h2>Purchase Form</h2>
      <div className='outerpurchaseform'>
      {/* <form onSubmit={handleSubmit}> */}
      <div className='purchaseformdata'>
        <div className="form-group">
          <label htmlFor="date" className='fs-5'>Date</label>
          <input
            type="date"
            className="form-control my-2 border-2"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="purchaseNo" className='fs-5'>Purchase Number</label>
          <input
            type="text"
            className="form-control my-2 border-2 fw-normal"
            id="purchaseNo"
            name="purchaseNo"
            placeholder='Purchase Number'
            value={formData.purchaseNo}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className='fs-5'>Supplier Name</label>
          <select
            className="form-control my-2 border-2"
            name="supplierName"
            value={formData.supplierName}
            onChange={handleInputChange}
          >
            <option value="">Select Supplier</option>
            {/* Add supplier options dynamically */}
          </select>
        </div>
        <div className="form-group">
          <label className='fs-5'>Category Name</label>
          <select
            className="form-control my-2 border-2"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleInputChange}
          >
            <option value="">Select Category</option>
            <option value="Baked Food">Baked Food</option>
            {/* Add category options dynamically */}
          </select>
        </div>
        <div className="form-group">
          <label className='fs-5'>Product Name</label>
          <select
            className="form-control my-2 border-2"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
          >
            <option value="select">Select Product</option>
            <option value="Biscuit">Biscuit</option>

            {/* Add product options dynamically */}
          </select>
        </div>
        <button
          type="button"
          className="btn btn-success additembutton"
          onClick={handleAddItem}

        >
            <i class="fa fa-plus"></i>
          Add Item
        </button>
        </div>
        {/* Add dropdowns for supplier, category, and product names */}
        {/* Implement dropdowns or select input elements as needed */}
        <div className='outerpurchaseitem'>
        {purchaseItems.map((item, index) => (
          <div key={index} className="purchase-item">
              <input
              type="text"
              className="form-control my-2 border-2 py-2"
              name="type"
              placeholder="Type"
              disabled
              value={formData.categoryName}
            //   onChange={(e) => handleItemChange(index, "type", e.target.value)}
            />
              <input
              type="text"
              className="form-control my-2 border-2 py-2"
              name="type"
              placeholder="Type"
              disabled
              value={formData.productName}
            //   onChange={(e) => handleItemChange(index, "type", e.target.value)}
            />
            <input
              type="text"
              className="form-control my-2 border-2 py-2"
              name="qty"
              placeholder="qty"
              
              value={item.qty}
              onChange={(e) => handleItemChange(index, "qty", e.target.value)}
            />
            <input
              type="number"
              className="form-control my-2 border-2 py-2"
              name="unitPrice"
              placeholder="Unit Price"
              value={item.unitPrice}
              onChange={(e) => handleItemChange(index, "unitPrice", e.target.value)}
            />
            <input
              type="text"
              className="form-control my-2 border-2 py-2"
              name="description"
              placeholder="Description"
              value={item.description}
              onChange={(e) => handleItemChange(index, "description", e.target.value)}
            />
            <input
              type="number"
              className="form-control my-2 border-2 py-2"
              name="totalPrice"
              placeholder="Total Price"
              value={item.totalPrice}
              onChange={(e) => handleItemChange(index, "totalPrice", e.target.value)}
            />
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleRemoveItem(index)}
            >
              Remove
            </button>
          </div>
        ))}
        </div>
        
        <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-3">
          Submit
        </button>
      {/* </form> */}
    </div>
    </div>
  );
};

export default PurchaseForm;
