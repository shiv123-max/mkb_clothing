import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IJirjKDonKM84aWZSB6OC01PPCMkHgRaaBBmHZZExGKSy2lPDWjnHPxaXW7cJYqUifBbxlDhLSnc2mPDJYJKm8Z00JI2E7OMl';

   const onToken = token => {
        console.log(token);
        alert('Payment Successful!')
    }

    return (
        <StripeCheckout 
         label='Pay Now'
         name= 'MKB Clothing Ltd.'
         billingAddress
         shippingAddress
         currency='INR'
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is ₹${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;