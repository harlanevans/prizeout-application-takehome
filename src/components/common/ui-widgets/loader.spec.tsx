import { render, screen } from '../../../testing/test-utils';
import React from 'react';
import '@testing-library/jest-dom';

import { Loader } from './loader';
import { commonInitialState } from '../../../slices/common-slice';
import { RootInitialState } from '../../../store';

describe('Test Loader Component', () => {
    test('Component matches snapshot', () => {
        const { asFragment } = render(<Loader />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Expect Loader to NOT render when state is NOT loading', () => {
        render(<Loader />, {
            preloadedState: {
                ...RootInitialState,
            },
        });

        expect(screen.queryByTitle('loader')).not.toBeInTheDocument();
    });

    test('Expect Loader to render when state is loading', () => {
        render(<Loader />, {
            preloadedState: {
                ...RootInitialState,
                common: {
                    ...commonInitialState,
                    loading: true,
                },
            },
        });

        expect(screen.queryByTitle('loader')).toBeVisible();
    });
});
