import React from 'react'
import "./dashboard.css"
const Dashboard = () => {
  return (
    <>
    <h4 className='dashhead'>DASHBOARD</h4>
    <div className='dashboardpage'>
        <div className='dashcard'>
            <h5>
            Total Products
            </h5>
            <h2>
            1230    
            </h2>
        </div>
        <div className='dashcard'>
        <h5>
            Total Revenue
            </h5>
            <h2>
            Rs 5000    
            </h2>
        </div>
        <div className='dashcard'>
           <h5>
            Total Customers
            </h5>
            <h2>
            1000    
            </h2>
        </div>
        <div className='dashcard'>
           <h5>
            Total Suppliers
            </h5>
            <h2>
            1000    
            </h2>
        </div>
        <div className='dashcard'>
           <h5>
            Total Category
            </h5>
            <h2>
            500    
            </h2>
        </div>
    </div>
    </>
  )
}

export default Dashboard