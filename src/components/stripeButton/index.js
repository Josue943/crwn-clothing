import { memo } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ amount }) => {
  const publisableKey = '';

  const onToken = token => {
    console.log(token);
    alert('Payment Success');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN clothing Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${amount}`}
      /*STRIPE LO QUIERE EN CENTAVOS */
      amount={amount * 100}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publisableKey}
    />
  );
};

export default memo(StripeButton);
