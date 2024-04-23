import React from 'react'
// import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";

const Card = ({id, img, title, star, reviews, prevPrice, newPrice}) => {
  return (
    <div className="card" key={id}>
        <img src={img} 
             alt="product-view" 
             className="card-img"
        />
        <div className="card-details">
          <h3 className='card-title'>{title}</h3>
          <div className="card-reviews">
            {star} {star} {star} {star}
            {/* <AiFillStar className='ratings-stars'/> 
            <AiFillStar className='ratings-stars'/>
            <AiFillStar className='ratings-stars'/>
            <AiFillStar className='ratings-stars'/> */}
            <span className="total-reviews">{reviews}</span>
          </div>

          <div className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
          </div>

          <div className="bag">
            <BsFillBagFill className='bag-icon'/>
          </div>
        </div>
      </div>
      
  )
}

export default Card