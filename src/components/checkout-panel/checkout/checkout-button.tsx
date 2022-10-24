import React from 'react';
import { useAppSelector } from '../../../hooks';
import { selectChosenCard, selectChosenOffer } from '../../../slices/checkout-slice';
import { Button } from '../../common';

interface CheckoutObject {
    checkout_value_id: string;
    cost_in_cents: number;
    name: string;
    value_in_cents: number;
}

const CheckoutButton: React.FC = (): React.ReactElement => {
    const chosenCard = useAppSelector(selectChosenCard);
    const chosenOffer = useAppSelector(selectChosenOffer);
    const chosenObject: CheckoutObject = {
        checkout_value_id: chosenCard.checkout_value_id,
        cost_in_cents: chosenCard.cost_in_cents,
        name: chosenOffer.name,
        value_in_cents: chosenCard.value_in_cents,
    };
    const buttonText = 'Prizeout Gift Card';
    const buttonHandler = async () => {
        const response = await setTimeout(() => mockRequest(chosenObject), 1000);
        return response;
    };

    const mockRequest = (body: CheckoutObject) => {
        let httpResponse;
        if (body.name) {
            httpResponse = 200;
            const data = JSON.stringify(body);
            return alert(`Response: ${httpResponse} - OK, ${data}`);
        }
        httpResponse = 500;
        return alert(`Response: ${httpResponse} - INTERNAL SERVER ERROR`);
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
