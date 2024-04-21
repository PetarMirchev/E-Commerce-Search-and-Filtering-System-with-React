import React from 'react';
import "./sidebar.css";
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';

const Sidebar = ({handleChangeRadioBTN}) => {

    //1.22.00

  return (
    <>
    <div className='sidebar'>
      <div className="logo-container">
        <h1>My Shop</h1>
      </div>
      
      <Category handleChange={handleChangeRadioBTN}/>
      <Price handleChange={handleChangeRadioBTN}/>
      <Colors handleChange={handleChangeRadioBTN}/>
    </div>
    </>
  )
}

export default Sidebar;