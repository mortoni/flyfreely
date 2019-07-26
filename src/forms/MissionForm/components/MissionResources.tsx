import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import Input from 'components/Input'
import Select from 'components/Select'
import { Field, Form, Formik } from 'formik'
import * as React from 'react'

export interface MissionResourcesProps {
    initialValues: any
    onComplete: any
    onBack: any
    operationTypeList: any
    workflowList: any
    rpaList: any
    crewRoleList: any
    personList: any
}

const defaultProps: MissionResourcesProps = {
    crewRoleList: [
        { value: '1', label: 'Remote Pilot in Command' },
        { value: '1', label: 'Remote Pilot' },
        { value: '1', label: 'RPA Observer' },
        { value: '1', label: 'Payload Operator' },
        { value: '1', label: 'Trainee Remote pilot' },
    ],
    initialValues: {},
    onBack: () => {},
    onComplete: () => {},
    operationTypeList: [
        { value: 'commercial', label: 'Commercial' },
        { value: 'testing', label: 'Testing' },
        { value: 'trainning', label: 'Trainning' },
    ],
    personList: [{ value: '1', label: 'Anthony Hopkins' }],
    rpaList: [
        { value: '1', label: 'Dummy RPA' },
        { value: '2', label: 'Real RPA (Servicable)' },
        { value: '3', label: 'Real RPA (Unservicable)' },
        { value: '4', label: 'Real RPA (Retired)' },
    ],
    workflowList: [
        { value: '1', label: 'Empty(No Primary)' },
        { value: '2', label: 'Empty(With Primary no Approval)' },
        { value: '3', label: 'Empty(With Primary with Approval)' },
        { value: '4', label: 'Empty(No Approval)' },
        { value: '5', label: 'Filled(No primary)' },
    ],
}

const MissionResources: React.SFC<MissionResourcesProps> = ({
    initialValues,
    onComplete,
    onBack,
    operationTypeList,
    workflowList,
    rpaList,
    ...props,
}) => {
    return (
        <Formik
            initialValues={{
                operationType: initialValues.operationType,
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
                                    {/* Operation Type */}
                                    <Grid item xs={12}>
                                        <Field
                                            name='operationType'
                                            label='Operation Type'
                                            component={Select}
                                            required
                                        >
                                            {operationTypeList.map(
                                                (type: any) => (
                                                    <MenuItem
                                                        key={type.value}
                                                        value={type.value}
                                                    >
                                                        {type.label}
                                                    </MenuItem>
                                                ),
                                            )}
                                        </Field>
                                        {/* <FieldError name='operationType' /> */}
                                    </Grid>
                                    {/* Workflow */}
                                    <Grid item xs={12}>
                                        <Field
                                            name='workflow'
                                            label='Workflow'
                                            component={Select}
                                            required
                                        >
                                            {workflowList.map(
                                                (workflow: any) => (
                                                    <MenuItem
                                                        key={workflow.value}
                                                        value={workflow.value}
                                                    >
                                                        {workflow.label}
                                                    </MenuItem>
                                                ),
                                            )}
                                        </Field>
                                        {/* <FieldError name='workflow' /> */}
                                    </Grid>
                                    {/* RPA */}
                                    <Grid item xs={12}>
                                        <Field
                                            name='rpa'
                                            label='RPA'
                                            component={Select}
                                            required
                                        >
                                            {rpaList.map((rpa: any) => (
                                                <MenuItem
                                                    key={rpa.value}
                                                    value={rpa.value}
                                                >
                                                    {rpa.label}
                                                </MenuItem>
                                            ))}
                                        </Field>
                                        {/* <FieldError name='rpa' /> */}
                                    </Grid>
                                    {/* Crew */}
                                    <Grid item xs={12}>
                                        Crew
                                    </Grid>

                                    {/* Crew Notes */}
                                    <Grid item xs={12}>
                                        <Field
                                            name='crewNotes'
                                            label='Crew Notes'
                                            component={Input}
                                        />
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

                                <Button onClick={handleSubmit} color='primary'>
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

MissionResources.defaultProps = defaultProps

export default MissionResources
