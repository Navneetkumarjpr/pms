import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "./menu.css"
import { Link } from 'react-router-dom';
const Menu = () => {
  return (

        <div className='menu'>
            <h2 className='menuhead'>Menu</h2>
    <Accordion defaultActiveKey="0">
      <Accordion.Item className='accord' eventKey="0">
        <Link to='' className='menulinkshead'><Accordion.Header className='sty'><i class="fa fa-tachometer menuicons" aria-hidden="true"></i>Dashboard</Accordion.Header></Link>   
        <div></div>    
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><i class="fa fa-building menuicons" aria-hidden="true"></i>Manage Suppliers</Accordion.Header>
        <Accordion.Body className='accordbody'>
        <Link to='suppliers' className='menulinks'><i class="fa fa-caret-right menuicons" aria-hidden="true"></i>All Suppliers</Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><i class="fa fa-users menuicons" aria-hidden="true"></i>Manage Customers</Accordion.Header>
        <Accordion.Body className='accordbody'>
        <Link to='customers' className='menulinks'><i class="fa fa-caret-right menuicons" aria-hidden="true"></i>All Customers</Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><i class="fa fa-balance-scale menuicons" aria-hidden="true"></i>Manage Units</Accordion.Header>
        <Accordion.Body className='accordbody'>
        <Link to='unitalldata' className='menulinks'><i class="fa fa-caret-right menuicons" aria-hidden="true"></i>All Units</Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><i class="fa fa-list-alt menuicons" aria-hidden="true"></i>Manage Category</Accordion.Header>
        <Accordion.Body className='accordbody'>
        <Link to='category' className='menulinks'><i class="fa fa-caret-right menuicons" aria-hidden="true"></i>All Category</Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><i class="fa fa-product-hunt menuicons" aria-hidden="true"></i>Manage Product</Accordion.Header>
        <Accordion.Body className='accordbody'>
        <Link to='manageproduct' className='menulinks'><i class="fa fa-caret-right menuicons" aria-hidden="true"></i>All Product</Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header><i class="fa fa-shopping-cart menuicons" aria-hidden="true"></i>Manage Purchase</Accordion.Header>
        <Accordion.Body className='accordbody'>
        <Link to='allpurchase' className='menulinks'><i class="fa fa-caret-right menuicons" aria-hidden="true"></i>All Purchase</Link>
        <br/>
        <br/>
        <Link to='/' className='menulinks'><i class="fa fa-caret-right menuicons" aria-hidden="true"></i>Approval Purchase</Link>
        </Accordion.Body>
      </Accordion.Item>
      <h2 className='menuhead'>Stock</h2>
      <Accordion.Item eventKey="7">
        <Accordion.Header><i class="fa fa-address-book menuicons" aria-hidden="true"></i>Manage Stock</Accordion.Header>
        <Accordion.Body className='accordbody'>
        <Link to='/' className='menulinks'><i class="fa fa-caret-right menuicons" aria-hidden="true"></i>Stock Report</Link>
        <br/>
        <br/>
        <Link to='/' className='menulinks'><i class="fa fa-caret-right menuicons" aria-hidden="true"></i>Approval Purchase</Link>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
  )
}

export default Menu