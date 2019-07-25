import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import FieldError from 'components/FieldError'
import InputField from 'components/Input'
import { Field, Form, Formik } from 'formik'
import * as React from 'react'
import validation from '../Validation'

interface MissionObjectivesProps {
    initialValues: any
    onComplete: any
    onBack: any
}

const MissionObjectives: React.SFC<MissionObjectivesProps> = ({
    initialValues,
    onComplete,
    onBack,
    ...props
}) => {
    return (
        <Formik
            initialValues={{
                location: initialValues.location,
                name: initialValues.name,
                objective: initialValues.objective,
            }}
            enableReinitialize
            validateOnBlur={false}
            validationSchema={validation({})}
            onSubmit={onComplete}
            render={({ values, errors, handleSubmit }) => {
                return (
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    {/* Name */}
                                    <Grid item xs={12}>
                                        <Field
                                            name='name'
                                            label='Name'
                                            component={InputField}
                                            required
                                        />
                                        <FieldError name='name' />
                                    </Grid>
                                    {/* Objectives */}
                                    <Grid item xs={12}>
                                        <Field
                                            name='objective'
                                            label='Objective'
                                            component={InputField}
                                        />
                                        <FieldError name='objective' />
                                    </Grid>
                                    {/* Location */}
                                    <Grid item xs={12}>
                                        <Field
                                            name='location'
                                            label='Location'
                                            component={InputField}
                                        />
                                        <FieldError name='objective' />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems='flex-end'>
                            <Grid item xs={12}>
                                <Button color='primary' disabled>
                                    Back
                                </Button>
                                <Button
                                    color='primary'
                                    onClick={handleSubmit}
                                    // className={classes.button}
                                >
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )
            }}
        />
    )
}

export default MissionObjectives
