import * as React from 'react';

import themed from '../../utils/themed';
import Default from './Default';

describe('Default', () => {
    it('should render correctly', () => {
        const component = themed(
            <Default />,
        ).toJSON();

        expect(component).toMatchSnapshot();
    });
});
