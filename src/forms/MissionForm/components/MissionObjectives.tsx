import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import FieldError from 'components/FieldError'
import InputField from 'components/Input'
import { Field, Form, Formik } from 'formik'
import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import validation from '../Validation'

interface MissionObjectivesProps {
    initialValues: any
    onComplete: any
    onBack: any
    theme: any
}

const MissionObjectives: React.SFC<MissionObjectivesProps> = ({
    initialValues,
    onComplete,
    onBack,
    theme,
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
                                            InputProps={{ multiline: true }}
                                        />
                                        <FieldError name='objective' />
                                    </Grid>
                                    {/* Location */}
                                    <Grid item xs={12}>
                                        <Field
                                            name='location'
                                            label='Location'
                                            component={InputField}
                                            required
                                        />
                                        <FieldError name='objective' />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Box mt={2} mb={1}>
                            <Grid container spacing={2} alignItems='flex-end'>
                                <Grid item xs={12}>
                                    <Button color='primary' disabled>
                                        Back
                                    </Button>
                                    <Button
                                        color='primary'
                                        onClick={handleSubmit}
                                    >
                                        Next
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Form>
                )
            }}
        />
    )
}

export default withTheme(MissionObjectives)
