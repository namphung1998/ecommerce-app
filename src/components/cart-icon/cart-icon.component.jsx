import React from 'react';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.action';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

function CartIcon({ toggleCartHidden }) {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
