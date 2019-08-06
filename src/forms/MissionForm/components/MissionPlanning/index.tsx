import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import DatePicker from 'components/DatePicker'
import { Field, Form, Formik } from 'formik'
import * as React from 'react'

export interface MissionPlanningProps {
    initialValues: any
    onComplete: any
    onBack: any
}

const MissionPlanning: React.SFC<MissionPlanningProps> = ({
    initialValues,
    onComplete,
    onBack,
    ...props
}) => {
    return (
        <Formik
            initialValues={{
                name: initialValues.name,
            }}
            enableReinitialize
            validateOnBlur={false}
            // validationSchema={validation({
            //     maxPassengers,
            //     maxChildren,
            // })}
            onSubmit={onComplete}
            render={({ values, errors, handleSubmit }) => {
                return (
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field
                                            label='Departure date'
                                            name='departureDate'
                                            component={DatePicker}
                                        />
                                        {/* <FieldError name="departureDate" /> */}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Button
                                    onClick={() =>
                                        onBack({
                                            ...initialValues,
                                            ...values,
                                        })
                                    }
                                >
                                    Back
                                </Button>

                                <Button
                                    color='primary'
                                    onClick={handleSubmit}
                                    variant='contained'
                                >
                                    Create Mission
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )
            }}
        />
    )
}

export default MissionPlanning
