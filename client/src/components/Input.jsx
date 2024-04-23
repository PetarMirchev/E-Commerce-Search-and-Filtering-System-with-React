import React from 'react'

const input = ({handleChangeRadioBTN, value, title, name, color}) => {
  return (
    <label className='sidebar-label-container'>
      <input onChange={handleChangeRadioBTN} type="radio" name={name} value={value}/>
      <span className='checkmark' style={{backgroundColor: color}}></span>{title}
    </label>
  )
}

export default input;