import React from 'react';
import { useAppSelector } from '../../../hooks';
import { selectCheckoutTotal } from '../../../slices/checkout-slice';
import { Button } from '../../common';

interface CheckoutObject {
    checkout_value_id: string;
    cost_in_cents: string;
    name: string;
    value_in_cents: number;
}

const CheckoutButton: React.FC = (): React.ReactElement => {
    const totalCheckout = useAppSelector(selectCheckoutTotal);
    const buttonText = 'Prizeout Gift Card';
    const buttonHandler = () => {
        if (totalCheckout > 0) {
            // make request with the checkout object interface here.
            // BUT HOW?! :P
            // Do I create a Node/express server? Json-server?
            // Probably some sort of async await post method.
        }
    };

    return (
        <>
            <Button
                ariaLabel="Prizeout your gift card"
                color={`primary`}
                onClick={buttonHandler}
                size="medium"
                text={buttonText}
                type="submit"
            />
        </>
    );
};

export default CheckoutButton;
