import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="header">
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delecatable arrray of dishes crafted with the finest ingredients and culinary expertise. Our meal will satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
            <Link to='/'><button >View Menu</button></Link>
        </div>
    </div>
  )
}

export default Header