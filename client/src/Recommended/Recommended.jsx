import React from 'react'
import "./recommended.css";

const Recommended = ({handleClickButton}) => {
  return (
    <>
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <button className='btns' onClick={handleClickButton} value="" >All Products</button>
        <button className='btns' onClick={handleClickButton} value="Nike">Nike</button>
        <button className='btns' onClick={handleClickButton} value="Adidas">Adidas</button>
        <button className='btns' onClick={handleClickButton} value="Puma">Puma</button>
        <button className='btns' onClick={handleClickButton} value="Kappa">Kappa</button>
        <button className='btns' onClick={handleClickButton} value="Vans">Vans</button>
      </div>
    </div>
    </>
  )
}

export default Recommended