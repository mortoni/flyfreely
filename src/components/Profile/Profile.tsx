import Grid from '@material-ui/core/Grid'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import * as React from 'react'
import styled from 'styled-components'
import Authorities from './components/Authorities'
import Details from './components/Details'
import FlightHistory from './components/FlightHistory'

const QontoStepIcon = ({ active }: any) => (
    <StepIcon>
        <StepCircle active={active} />
    </StepIcon>
)

const StepIcon = styled.div`
    color: ${({ theme }) => theme.palette.grey[400]};
    display: flex;
    height: 22;
    align-items: center;
    padding-left: 9px;
`

const StepCircle: any = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ active, theme }: any) =>
        active ? theme.palette.primary.main : theme.palette.grey[400]};
`

const Profile: React.SFC = () => {
    const [activeStep, setActiveStep] = React.useState(0)

    const handleStep = (step: number) => () => {
        setActiveStep(step)
    }

    const steps = [
        {
            component: Details,
            label: 'Details',
            onComplete: () => {},
        },
        {
            component: Authorities,
            label: 'Authorities',
            onComplete: () => {},
        },
        {
            component: FlightHistory,
            label: 'Flight History & Log Book',
            onComplete: () => {},
        },
    ]

    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Stepper
                    nonLinear
                    activeStep={activeStep}
                    orientation='vertical'
                >
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepButton onClick={handleStep(index)}>
                                <StepLabel StepIconComponent={QontoStepIcon}>
                                    {step.label}
                                </StepLabel>
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
            </Grid>
            <Grid item xs={9}>
                {React.createElement(steps[activeStep].component, {})}
            </Grid>
        </Grid>
    )
}

export default Profile
