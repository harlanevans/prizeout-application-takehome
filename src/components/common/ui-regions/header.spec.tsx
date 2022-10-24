import { render } from '../../../testing/test-utils';
import React from 'react';
import '@testing-library/jest-dom';

import { Header } from './header';

describe('Test Header Component', () => {
    test('Component matches snapshot', () => {
        const { asFragment } = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
    });
});
