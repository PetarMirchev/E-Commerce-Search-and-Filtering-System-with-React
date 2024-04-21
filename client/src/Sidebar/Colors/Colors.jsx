import React from 'react'
import "./colors.css";


const Colors = () => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title colors-title'>Colors</h2>

      <div className='box-wrapper'>

        <label className='sidebar-label-container'>
          <input type="radio" name='test3' value=''/>
          <span className='checkmark'></span>All
        </label>

        <label className='sidebar-label-container'>
          <input type="radio" name='test3' value=''/>
          <span className='checkmark'></span>Black
        </label>

        <label className='sidebar-label-container'>
          <input type="radio" name='test3' value=''/>
          <span className='checkmark'></span>Blue
        </label>

        <label className='sidebar-label-container'>
          <input type="radio" name='test3' value=''/>
          <span className='checkmark'></span>Red
        </label>

        <label className='sidebar-label-container'>
          <input type="radio" name='test3' value=''/>
          <span className='checkmark'></span>Green
        </label>

        <label className='sidebar-label-container'>
          <input type="radio" name='test3' value=''/>
          <span className='checkmark'></span>White
        </label>

        </div>
    </div>
  )
}

export default Colors