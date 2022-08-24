import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HUenXAE6pDuegvmoibDQhVRbxnxhOQLAiZM1XWSEZkrxMM83N7E1wnJf0rDsYvF6ZSyHDSsIdjooMfW0ZfU0vTk0058FzovZM';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return(
        <StripeCheckout 
            label = 'Pay Now'
            name= 'React Clothing Inc.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;