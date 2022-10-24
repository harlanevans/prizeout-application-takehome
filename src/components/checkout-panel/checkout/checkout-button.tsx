import React from 'react';
import { Button } from '../../common';

const CheckoutButton: React.FC = (): React.ReactElement => {
    const buttonText = 'Prizeout Gift Card';
    const buttonHandler = () => {
        // Checkout logic here
        // mock server here
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
