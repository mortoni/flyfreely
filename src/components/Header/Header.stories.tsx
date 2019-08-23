import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Header from './Header'

storiesOf('components/Header', module).add('default', () => <Header />, {
    viewport: { defaultViewport: 'iphone6' },
})
