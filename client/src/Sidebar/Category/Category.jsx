import React from 'react'
import "./category.css";
import Input from "../../components/Input";

const Category = ({handleChangeRadioBTN}) => {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>

      <div className='box-wrapper'>

        <label className='sidebar-label-container'>
          <input type="radio" name='test' value='' onChange={handleChangeRadioBTN}/>
          <span className='checkmark'></span>All
        </label>

       <Input 
        handleChangeRadioBTN = {handleChangeRadioBTN}
        value="sneakers"
        title="Sneakers"
        name="test"
       />
        <Input
          handleChangeRadioBTN={handleChangeRadioBTN}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChangeRadioBTN={handleChangeRadioBTN}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChangeRadioBTN={handleChangeRadioBTN}
          value="heels"
          title="Heels"
          name="test"
        />

      </div>
      
    </div>
    
  )
}

export default Category