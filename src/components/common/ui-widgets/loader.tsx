import * as React from 'react';
import { selectLoading } from '../../../slices/common-slice';
import { useAppSelector } from '../../../hooks';
import './loader.less';

export const Loader: React.FC = (): React.ReactElement => {
    const isLoading = useAppSelector(selectLoading);

    return (
        <div>
            {isLoading && (
                <div className="loader z-index-loader" title="loader">
                    <img
                        src="https://assets.prizeout.com/widget/cobranded-logos/PrizeoutLogoCircle.svg"
                        alt="Loading Prizeout"
                    />
                </div>
            )}
        </div>
    );
};
