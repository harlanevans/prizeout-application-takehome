import { render, screen } from '../../../testing/test-utils';
import React from 'react';
import '@testing-library/jest-dom';

import { Alert } from './alert';

describe('Test Alert Component', () => {
    const message = `Alert message`;
    const type = `error`;

    // Matches snapshot
    test('Component matches snapshot', () => {
        const { asFragment } = render(<Alert message={message} type={type} />);

        expect(asFragment()).toMatchSnapshot();
    });

    // Alert text renders
    test('Alert text is displayed', () => {
        render(<Alert message={message} type={type} />);

        expect(screen.getByText(message)).toBeVisible();
    });

    // Alert icon renders based on alert type, check classes
    test('Alert icon display is based on alert type', () => {
        render(<Alert message={message} type={type} />);

        const alertId = screen.getByTestId('alert-icon');

        expect(alertId).toHaveClass(`alert--${type}`);
    });
});
