import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import './header.css';

function Header() {
  return (
    <div className='header'>
      <div className='header__logo'>
        <StorefrontIcon className='header__logoImage' fontSize='large' />
        <h2 className='header__logoTitle'>eComm</h2>
      </div>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <div className='nav__item'>
          <span className='nav__item_1'>Hello Guest</span>
          <span className='nav__item_2'>Sign In</span>
        </div>
        <div className='nav__item'>
          <span className='nav__item_1'>Your</span>
          <span className='nav__item_2'>Shop</span>
        </div>
        <div className='nav__item nav__basket'>
          <ShoppingBasketIcon  className='itemBasket'/>
          <span className='nav__item_2 nav__basketCount'>0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
