import { render, screen } from '../../../testing/test-utils';
import React from 'react';
import '@testing-library/jest-dom';

import { Button } from './button';

describe('Test Button Component', () => {
    const ariaLabel = `Aria label`;
    const color = `primary`;
    const isDisabled = true;
    const isInline = false;
    const isLink = false;
    const isLoading = false;
    const onClick = jest.fn();
    const size = `medium`;
    const text = `Button text`;
    const type = `submit`;

    // Matches snapshot
    test('Component matches snapshot', () => {
        const { asFragment } = render(
            <Button
                ariaLabel={ariaLabel}
                color={color}
                isDisabled={isDisabled}
                isInline={isInline}
                isLink={isLink}
                isLoading={isLoading}
                onClick={onClick}
                size={size}
                text={text}
                type={type}
            />,
        );

        expect(asFragment()).toMatchSnapshot();
    });

    // Button text renders if not loading
    test('Button text renders on button if not loading', () => {
        render(
            <Button
                ariaLabel={ariaLabel}
                color={color}
                isDisabled={isDisabled}
                isInline={isInline}
                isLink={isLink}
                isLoading={isLoading}
                onClick={onClick}
                size={size}
                text={text}
                type={type}
            />,
        );

        expect(screen.getByText(text)).toBeVisible();
    });

    // Display button loading spinner when loading
    test('Button spinner is displayed if loading', () => {
        render(
            <Button
                ariaLabel={ariaLabel}
                color={color}
                isDisabled={isDisabled}
                isInline={isInline}
                isLink={isLink}
                isLoading={!isLoading}
                onClick={onClick}
                size={size}
                text={text}
                type={type}
            />,
        );

        expect(screen.getByTestId('button-loading')).toBeVisible();
    });

    // Append disabled class if disabled
    test('Disabled class if disabled state is true', () => {
        render(
            <Button
                ariaLabel={ariaLabel}
                color={color}
                isDisabled={isDisabled}
                isInline={isInline}
                isLink={isLink}
                isLoading={!isLoading}
                onClick={onClick}
                size={size}
                text={text}
                type={type}
            />,
        );

        expect(screen.getByTestId('button')).toHaveClass('button--disabled');
    });
});
