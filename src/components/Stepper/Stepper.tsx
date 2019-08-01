import { MobileStepper } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import * as React from 'react'
import { Else, If, Then } from 'react-if'

export interface StepperProps {
    width: any
    steps: any
    activeStep: any
}

const StepperComponent: React.SFC<StepperProps> = ({
    width,
    steps,
    activeStep,
}) => {
    const isMobile = isWidthUp(width, 'xs')

    return (
        <If condition={isMobile}>
            <Then>
                <Box m={2}>
                    <Grid
                        container
                        direction='row'
                        justify='center'
                        alignItems='center'
                    >
                        <MobileStepper
                            variant='dots'
                            steps={4}
                            position='static'
                            activeStep={activeStep}
                            nextButton={null}
                            backButton={null}
                        />
                    </Grid>
                </Box>
            </Then>
            <Else>
                <Stepper activeStep={activeStep} orientation='horizontal'>
                    {steps.map((item: any) => (
                        <Step key={item.label} completed={false}>
                            <StepLabel color='textSecondary'>
                                {item.label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Else>
        </If>
    )
}

export default withWidth()(StepperComponent)
