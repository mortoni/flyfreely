import * as React from 'react'

import themed from '../../utils/themed'
import Widget from '../Widget'

describe('Widget', () => {
    it('should render correctly', () => {
        const component = themed(<Widget />).toJSON()

        expect(component).toMatchSnapshot()
    })
})
