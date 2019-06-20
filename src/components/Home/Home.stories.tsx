import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { wInfo } from '../../utils/wInfo'
import Home from './Home'

const stories = storiesOf('Pages', module)
stories.addDecorator(withKnobs)

stories.add(
    'home',
    wInfo()(() => (
        <Home />
    )),
)
