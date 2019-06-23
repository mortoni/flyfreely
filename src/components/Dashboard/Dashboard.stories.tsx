import { withKnobs } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import Dashboard from './Dashboard'

storiesOf('Dashboard', module)
    .addDecorator(jsxDecorator)
    .addDecorator(withKnobs)
    .addParameters({
        backgrounds: [
            { name: 'grey', value: '#ccc', default: true },
            { name: 'none', value: '#fff' },
            { name: 'black', value: '#000' },
        ],
    })
    .add('normal', () => <Dashboard />)
