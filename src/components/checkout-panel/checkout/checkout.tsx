import React, { useEffect } from 'react';
import { PrizeoutOffer, PrizeoutOfferValueOptions } from '../../../slices/offers-slice';
import { GiftCard, Button } from '../../common';
import checkoutPanelViewWrapper from '../view-wrapper';
import CheckoutButton from './checkout-button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';

import './checkout.less';
import { selectChosenCard, setChosenCard } from '../../../slices/checkout-slice';
import { useAppSelector } from '../../../hooks';
import CheckoutTotalView from './checkout-total/checkout-total';

interface CheckoutPanelViewProps {
    chosenOffer: PrizeoutOffer;
}

type Currency = {
    style: string;
    currency: string;
};

const CheckoutPanelView: React.FC<CheckoutPanelViewProps> = ({ chosenOffer }): React.ReactElement => {
    const dispatch = useDispatch<AppDispatch>();
    const activeCardOffer = useAppSelector(selectChosenCard);
    const USD: Currency = {
        currency: 'USD',
        style: 'currency',
    };
    const { name, image_url } = chosenOffer;

    // Filter through chosenOffer.giftcard_list array
    // If the ids in that array do not match the currently selected activeCardOffer, reset state
    // because the user has clicked a different offer. This will prevent edge case where user can checkout with a
    // card value that does not match an offer
    useEffect(() => {
        const filteredArray = chosenOffer.giftcard_list.filter(
            (card) => card.checkout_value_id === activeCardOffer.checkout_value_id,
        );
        if (filteredArray.length < 1) {
            // I'm sure there's a better way to do this than set this object with empty values
            dispatch(
                setChosenCard({
                    checkout_value_id: '',
                    cost_in_cents: 0,
                    display_bonus: 0,
                    display_monetary_bonus: 0,
                    value_in_cents: 0,
                }),
            );
        }
    }, [chosenOffer]);

    const buttonHandler = (card: PrizeoutOfferValueOptions) => {
        dispatch(setChosenCard(card));
    };

    const getGiftCards = () => {
        return chosenOffer.giftcard_list.map((card, i) => {
            const dollarAmount = (card.value_in_cents / 100).toLocaleString('en-US', USD);
            return (
                <div className="checkout__amountCard" key={`${card.checkout_value_id}, ${i}`}>
                    <Button
                        ariaLabel={`Amount of ${dollarAmount}`}
                        color={activeCardOffer.checkout_value_id === card.checkout_value_id ? `primary` : `secondary`}
                        onClick={() => buttonHandler(card)}
                        size="small"
                        text={dollarAmount}
                        type="submit"
                    />
                </div>
            );
        });
    };

    return (
        <section className="checkout">
            <div className="grid grid--top-bottom grid--stretch-top">
                <div className="grid__item">
                    <section className="checkout__brand">
                        {!!chosenOffer.name ? (
                            <>
                                <GiftCard name={name} imgUrl={image_url} />
                                Select Redemption Amount
                                <div className="checkout__amounts">{getGiftCards()}</div>
                            </>
                        ) : null}
                    </section>
                </div>
                <div className="grid__item">
                    <CheckoutTotalView offer={chosenOffer} card={activeCardOffer} />
                </div>
                <div className="grid__item">
                    <section className="checkout__calculation">
                        <CheckoutButton />
                    </section>
                </div>
            </div>
        </section>
    );
};

export default checkoutPanelViewWrapper(CheckoutPanelView, 'checkout');
