import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Stepper from './Stepper'

storiesOf('Components/Stepper', module).add('normal', () => {
    const steps = [
        {
            component: null,
            label: 'One',
            onComplete: () => {},
        },
        {
            component: null,
            label: 'Two',
            onComplete: () => {},
        },
        {
            component: null,
            label: 'Three',
            onComplete: () => {},
        },
        {
            component: null,
            label: 'Four',
            onComplete: null,
        },
    ]

    const activeStep = number('active step', 0)

    return <Stepper steps={steps} activeStep={activeStep} />
})
