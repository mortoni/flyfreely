import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import { action, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import MyStepper from './Stepper'

storiesOf('Components/Stepper', module)
    .add('horizontal', () => {
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

        return <MyStepper steps={steps} activeStep={activeStep} />
    })
    .add('vertical', () => {
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

        return (
            <Stepper nonLinear activeStep={activeStep} orientation='vertical'>
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepButton onClick={() => {}}>
                            <StepLabel StepIconComponent={null}>
                                {step.label}
                            </StepLabel>
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
        )
    })
