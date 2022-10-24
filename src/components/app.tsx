import * as React from 'react';
import { Loader } from './common';
import { Widget } from '../modules/widget';
import { windowResizeHandler } from '../utils/event-handlers';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { useAppSelector } from '../hooks';
import {
    selectIsCheckoutPanelCollapsed,
    selectIsMobilePortrait,
    setIsCheckoutPanelCollapsed,
    setIsMobilePortrait,
} from '../slices/common-slice';
import { useLayoutEffect } from 'react';

import './app.less';

export const App: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch<AppDispatch>();
    const isCheckoutPanelCollapsedView = useAppSelector(selectIsCheckoutPanelCollapsed);
    const isMobilePortraitView = useAppSelector(selectIsMobilePortrait);

    const windowResize = () => {
        windowResizeHandler(dispatch, isCheckoutPanelCollapsedView, isMobilePortraitView);
    };

    window.addEventListener('resize', windowResize);

    useLayoutEffect(() => {
        const isCheckoutPanelCollapsed = window.innerWidth < 880;
        const isMobilePortrait = window.innerWidth <= 480;

        dispatch(setIsCheckoutPanelCollapsed(isCheckoutPanelCollapsed));
        dispatch(setIsMobilePortrait(isMobilePortrait));

        return () => {
            window.removeEventListener('resize', windowResize);
        };
    }, []);
    return (
        <div className="application-wrapper">
            <div className="app-content-wrapper">
                <Widget />
            </div>
            <Loader />
        </div>
    );
};
