import React from 'react';
import { PrizeoutOffer, PrizeoutOfferValueOptions } from '../../../../slices/offers-slice';

import './checkout-total.less';

interface CheckoutTotalViewProps {
    offer: PrizeoutOffer;
    card: PrizeoutOfferValueOptions;
}
type Currency = {
    style: string;
    currency: string;
};

const CheckoutTotalView: React.FC<CheckoutTotalViewProps> = ({ offer, card }): React.ReactElement => {
    const USD: Currency = {
        currency: 'USD',
        style: 'currency',
    };
    const dollarAmountNumber: number = card.value_in_cents / 100;
    const dollarAmountString: string = dollarAmountNumber.toLocaleString('en-US', USD);
    const prizeoutBonus: number = Math.floor(card.display_bonus);
    const prizeoutBonusTotal: number = (prizeoutBonus / 100) * dollarAmountNumber || 0;
    const total: string = (dollarAmountNumber + prizeoutBonusTotal).toLocaleString('en-US', USD);
    const prizeOutBonusUI: string = prizeoutBonusTotal.toLocaleString('en-US', USD);

    return (
        <>
            {!!offer.name ? (
                <section className="checkout-total">
                    <div className="checkout-total__rows">
                        <div>Redemption Amount</div>
                        <div>{dollarAmountString}</div>
                    </div>
                    <div className="checkout-total__rows checkout-total__rowsBonus">
                        <div>
                            Prizeout Bonus (<span>&#247;</span>
                            {prizeoutBonus}%)
                        </div>
                        <div>{prizeOutBonusUI}</div>
                    </div>
                    <div className="checkout-total__rows">
                        <div>You Get</div>
                        <div>{total}</div>
                    </div>
                </section>
            ) : null}
        </>
    );
};

export default CheckoutTotalView;
