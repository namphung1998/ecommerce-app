import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_huYUalO9aItO0NfVFV6DwdEk00P4RlaNfy';
  const onToken = token => {
    console.log('==========>', token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='http://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
