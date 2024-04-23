import React from 'react'
import "./price.css";
import Input from "../../components/Input";

const Price = ({handleChangeRadioBTN}) => {

  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title'>Price</h2>

      <div className='box-wrapper'>

      <label className='sidebar-label-container'>
          <input onChange={handleChangeRadioBTN} type="radio" name='test2' value=''/>
          <span className='checkmark'></span>All
        </label>

      <Input
        handleChangeRadioBTN={handleChangeRadioBTN}
        value={50}
        title="$0 - $50"
        name="test2"
      />

      <Input
        handleChangeRadioBTN={handleChangeRadioBTN}
        value={100}
        title="$51 - $100"
        name="test2"
      />

      <Input
        handleChangeRadioBTN={handleChangeRadioBTN}
        value={150}
        title="$101 - $150"
        name="test2"
      />

      <Input
        handleChangeRadioBTN={handleChangeRadioBTN}
        value={200}
        title="Over $200"
        name="test2"
      />

        {/* <label className='sidebar-label-container'>
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
        </label> */}

        </div>
    </div>
  )
}

export default Price