import React from 'react'
import "./navbar.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Navbar = ({handleInputTextUserChange, query}) => {
  return (
    <div className="nav-div">
      <div className="nav-container">
        <input 
          type="text" 
          name="find" 
          placeholder='Enter your search...'
          onChange={handleInputTextUserChange} 
          className="search-input"
          value={query}
        />
      </div>
      <div className="profile-container">
        <a href=""><FiHeart className="nav-icons"/></a>
        <a href=""><AiOutlineShoppingCart className="nav-icons"/></a>
        <a href=""><AiOutlineUserAdd className="nav-icons"/></a>
      </div>
    </div>
  )
}

export default Navbar;