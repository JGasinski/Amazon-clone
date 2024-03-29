import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom"
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{ basket, user}, dispatch] = useStateValue();
    

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }


    return (
        <div className='header'>
            <Link to ="/">
                <img 
                    className="header_logo"src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                />
            </Link>
            
            
            <div
            className="header_search">
                <input
                className="header_searchInput" type="text" />
                {/* Logo */}
                <SearchIcon
                className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <Link to={!user && '/login'}>{/* if there was no user it will take you back to login page otherwise to hopme page*/ }
                    <div onClick={handleAuthenticaton}className='header_option'>
                    <span className="header__optionLineOne">Hello, {!user ? 'Guest' : user.email}</span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Orders</span>
                </div>
                
                <div className='header_option'>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>

                <Link to="/checkout">
                    <div        
                        className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo 
                        header_bascetCount">
                            { basket?.length} 
                        </span>
                </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
// ? is optional chaining for handling errors