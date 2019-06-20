import * as React from 'react'

import themed from '../../utils/themed'
import Dashboard from './Dashboard'

describe('Dashboard', () => {
    it('should render correctly', () => {
        const component = themed(
            <Dashboard />,
        ).toJSON()

        expect(component).toMatchSnapshot()
    })
})
