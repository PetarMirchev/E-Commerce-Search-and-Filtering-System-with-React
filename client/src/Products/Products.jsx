import React from 'react'
import "./products.css";
// import Card from '../components/Card';

const Products = ({resultOfFilter}) => {
  return (
    <>
    <section className='card-container'> 
        {resultOfFilter}
    </section>
    </>
  )
}

export default Products