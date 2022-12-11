import React from 'react';
import './Donation.css'
import StripeCheckout from 'react-stripe-checkout'
const Donation = () => {
    const [product] = React.useState({
        name: "Как вы можете помочь?",
        price: "",
        description: "Charity"
    })
    function handleToken(token, addresses) {
        console.log({ token, addresses })
    }
    return (
        <div className='donation-container'>
            <div className="product">
                <h2 className='donation-title'>{product.name}</h2>
                <h4 className='donation-subtitle'> Сделать пожертвование{product.price}</h4>

                <StripeCheckout
                    stripeKey="pk_test_51LY8CgCh7MHArs4nrBct1ntPA1TVp3rBk4Vc8QgnDkqFKYuzr0CUt4w0A4sbm18mkaificlKySObJIfLfrc7uU8h007a6vdGDW"
                    token={handleToken}
                    billingAddress
                    shippingAddress
                    amount={product.price * 100}
                    name={product.name}
                />
            </div>
        </div>
    );
};

export default Donation;