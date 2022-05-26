import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom';

// 머터리얼 아이콘
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../../context/StateProvider';


function Header() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className='header'>
        <Link to="/">
          <img className='header__logo' 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon"
          />
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon"/>
        </div>

        <div className="header__nav">
          <Link to="/login">
            <div className="header__option">
              <span className="header__optionLineOne">hello guest</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Retirns</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartIcon/>
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}</span>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Header