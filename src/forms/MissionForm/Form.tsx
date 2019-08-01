import Grid from '@material-ui/core/Grid'
import Stepper from 'components/Stepper'
import * as React from 'react'
import MissionCreated from './components/MissionCreated'
import MissionObjective from './components/MissionObjectives'
import MissionPlanning from './components/MissionPlanning'
import MissionResources from './components/MissionResources'

export interface FormProps {
    values: any
    setValues: any
    handleSubmit: any
}

const Form: React.SFC<FormProps> = ({
    values,
    setValues,
    handleSubmit,
    ...props
}) => {
    const [activeStep, setActiveStep] = React.useState(0)
    const handlePreviousStep = React.useCallback(
        (formValues) => {
            setValues({ ...values, ...formValues })
            setActiveStep((step) => step - 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },
        [values, setValues, setActiveStep],
    )
    const handleNextStep = React.useCallback(
        (formValues) => {
            setValues({ ...values, ...formValues })
            setActiveStep((step) => step + 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },
        [values, setValues, setActiveStep],
    )
    const handleFinalStep = React.useCallback(
        (formValues) => {
            setValues({ ...values, ...formValues })
            setActiveStep((step) => step + 1)
            handleSubmit()
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },
        [values, setValues, setActiveStep, handleSubmit],
    )
    const steps = [
        {
            component: MissionObjective,
            label: 'Objectives',
            onComplete: handleNextStep,
        },
        {
            component: MissionResources,
            label: 'Resources',
            onComplete: handleNextStep,
        },
        {
            component: MissionPlanning,
            label: 'Planning',
            onComplete: handleFinalStep,
        },
        {
            component: MissionCreated,
            label: 'Done',
            onComplete: handleFinalStep,
        },
    ]

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Stepper steps={steps} activeStep={activeStep} />
            </Grid>
            <Grid item xs={12}>
                {React.createElement(steps[activeStep].component, {
                    initialValues: values,
                    onBack: handlePreviousStep,
                    onComplete: steps[activeStep].onComplete,
                    ...props,
                })}
            </Grid>
        </Grid>
    )
}

export default Form
