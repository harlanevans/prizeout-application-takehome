import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { PrizeoutOfferValueOptions, PrizeoutOffer } from './offers-slice';

export interface CheckoutSlice {
    chosenCard: PrizeoutOfferValueOptions;
    chosenOffer: PrizeoutOffer;
    isCollapsedCheckoutPanelOpen: boolean;
    loading: boolean;
    view: ViewEnum;
    checkoutTotal: number;
}

export type ViewEnum = 'checkout' | 'checkout-confirmation';

export const checkoutInitialState: CheckoutSlice = {
    checkoutTotal: 0,
    chosenCard: {
        checkout_value_id: '',
        cost_in_cents: 0,
        display_bonus: 0,
        display_monetary_bonus: 0,
        value_in_cents: 0,
    },
    chosenOffer: {
        checkout_hero_url: '',
        currency_code: '',
        description: '',
        giftcard_list: [],
        image_url: '',
        is_enabled: false,
        logomark_url: '',
        name: '',
        stores: [], // tbd in later phase
        support_creative_list: [], // tbd in later phase
        tag: '',
    },
    isCollapsedCheckoutPanelOpen: false,
    loading: false,
    view: 'checkout',
};

export const checkoutSlice = createSlice({
    initialState: checkoutInitialState,
    name: 'checkout',
    reducers: {
        setCheckoutTotal(state, action: PayloadAction<number>) {
            state.checkoutTotal = action.payload;
        },
        setCheckoutView(state, action: PayloadAction<ViewEnum>) {
            state.view = action.payload;
        },
        setChosenCard(state, action: PayloadAction<PrizeoutOfferValueOptions>) {
            state.chosenCard = action.payload;
        },
        setChosenOffer(state, action: PayloadAction<PrizeoutOffer>) {
            state.chosenOffer = action.payload;
        },
        toggleIsCollapsedCheckoutPanelOpen(state) {
            state.isCollapsedCheckoutPanelOpen = !state.isCollapsedCheckoutPanelOpen;
        },
        toggleIsLoading(state) {
            state.loading = !state.loading;
        },
    },
});

export const {
    setCheckoutView,
    setCheckoutTotal,
    toggleIsCollapsedCheckoutPanelOpen,
    toggleIsLoading,
    setChosenCard,
    setChosenOffer,
} = checkoutSlice.actions;

export const selectLoading = ({ checkout: { loading } }: RootState): boolean => loading;

export const selectCheckoutView = ({ checkout: { view } }: RootState): ViewEnum => view;

export const selectChosenCard = ({ checkout: { chosenCard } }: RootState): PrizeoutOfferValueOptions => chosenCard;

export const selectChosenOffer = ({ checkout: { chosenOffer } }: RootState): PrizeoutOffer => chosenOffer;

export const selectCheckoutTotal = ({ checkout: { checkoutTotal } }: RootState): number => checkoutTotal;

export const selectIsCollapsedCheckoutPanelOpen = ({
    checkout: { isCollapsedCheckoutPanelOpen },
}: RootState): boolean => isCollapsedCheckoutPanelOpen;

export default checkoutSlice.reducer;
