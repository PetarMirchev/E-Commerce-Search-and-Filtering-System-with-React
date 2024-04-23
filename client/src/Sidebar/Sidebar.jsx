import React from 'react';
import "./sidebar.css";
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';

const Sidebar = ({handleChangeRadioBTN}) => {

  return (
    <>
    <div className='sidebar'>
      <div className="logo-container">
        <h1>My Shop</h1>
      </div>
      
      <Category handleChangeRadioBTN={handleChangeRadioBTN}/>
      <Price handleChangeRadioBTN={handleChangeRadioBTN}/>
      <Colors handleChangeRadioBTN={handleChangeRadioBTN}/>
    </div>
    </>
  )
}

export default Sidebar;