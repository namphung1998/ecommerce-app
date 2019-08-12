import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionDiv,
  OptionLink
} from './header.styles';

import './header.styles.scss';

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/shop'>
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionDiv>
        ) : (
          <OptionLink to='/signin'>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);