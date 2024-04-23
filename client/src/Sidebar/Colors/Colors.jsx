import React from 'react'
import "./colors.css";
import Input from "../../components/Input";


const Colors = ({handleChangeRadioBTN}) => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title colors-title'>Colors</h2>

      <div className='box-wrapper'>

        <label className='sidebar-label-container'>
          <input type="radio" name='test3' value=''/>
          <span onChange={handleChangeRadioBTN} className="checkmark all"></span>All
        </label>

        <Input
          handleChangeRadioBTN={handleChangeRadioBTN}
          value="black"
          title="Black"
          name="test3"
          color="black"
        />

        <Input
          handleChangeRadioBTN={handleChangeRadioBTN}
          value="blue"
          title="Blue"
          name="test3"
          color="blue"
        />

        <Input
          handleChangeRadioBTN={handleChangeRadioBTN}
          value="red"
          title="Red"
          name="test3"
          color="red"
        />

        <Input
          handleChangeRadioBTN={handleChangeRadioBTN}
          value="green"
          title="Green"
          name="test3"
          color="green"
        />

        {/* fix the problem whit White dot on White background color */}
        <Input
          handleChangeRadioBTN={handleChangeRadioBTN}
          value="white"
          title="White"
          name="test3"
        />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}>
          </span>



        {/* <label className='sidebar-label-container'>
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
        </label> */}  

        </div>
    </div>
  )
}

export default Colors