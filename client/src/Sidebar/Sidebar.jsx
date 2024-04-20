import React from 'react';
import "./sidebar.css";
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';

const Sidebar = () => {
  return (
    <>
    <div className='sidebar'>
      <div className="logo-container">
        <h1>My Shop</h1>
      </div>
      
      <Category/>
      <Price/>
      <Colors/>
    </div>
    </>
  )
}

export default Sidebar;