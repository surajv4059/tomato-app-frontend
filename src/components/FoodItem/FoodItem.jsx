/* eslint-disable react/prop-types */
import './FoodItem.css'
import {assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems, addToCart,removeFromCart, url} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={url+"/images/"+image} alt="" />
            {
                !cartItems[id] 
                ? < img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' />
                :<div className='food-item-counter'>
                    <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt='' />
                    <p>{cartItems[id]}</p>
                    <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem