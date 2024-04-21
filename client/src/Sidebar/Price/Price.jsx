import React from 'react'
import "./price.css";

const Price = () => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title'>Price</h2>

      <div className='box-wrapper'>

        <label className='sidebar-label-container'>
          <input type="radio" name='test2' value=''/>
          <span className='checkmark'></span>$0 - $50
        </label>

        <label className='sidebar-label-container'>
          <input type="radio" name='test2' value=''/>
          <span className='checkmark'></span>$51 - $100
        </label>

        <label className='sidebar-label-container'>
          <input type="radio" name='test2' value=''/>
          <span className='checkmark'></span>$101 - $150
        </label>

        <label className='sidebar-label-container'>
          <input type="radio" name='test2' value=''/>
          <span className='checkmark'></span>$151 - $200
        </label>

        <label className='sidebar-label-container'>
          <input type="radio" name='test2' value=''/>
          <span className='checkmark'></span>Over $200
        </label>

        </div>
    </div>
  )
}

export default Price