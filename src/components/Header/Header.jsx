import React from 'react'
import './Header.css'

// 머터리얼 아이콘
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
  return (
    <div className='header'>
        <img className='header__logo' 
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon"/>
        </div>

        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">hello guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Retirns</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <div className="header__optionBasket">
            <ShoppingCartIcon/>
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div>
        </div>
        
    </div>
  )
}

export default Header