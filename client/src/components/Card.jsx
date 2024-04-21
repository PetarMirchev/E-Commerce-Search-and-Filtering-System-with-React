import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";

const Card = () => {
  return (
    <div className="card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" 
             alt="product-view" 
             className="card-img"
        />
        <div className="card-details">
          <h3 className='card-title'>Shoe</h3>
          <div className="card-reviews">
            <AiFillStar className='ratings-stars'/> 
            <AiFillStar className='ratings-stars'/>
            <AiFillStar className='ratings-stars'/>
            <AiFillStar className='ratings-stars'/>
            <span className="total-reviews">4</span>
          </div>

          <div className="card-price">
            <div className="price">
              <del>$300</del> $200
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