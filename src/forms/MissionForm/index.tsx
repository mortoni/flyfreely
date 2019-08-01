import { Formik } from 'formik'
import * as React from 'react'
import Form from './Form'
import submit from './Submit'

interface MissionFormProps {
    name: string
    objective: string
    location: string
    operationType: string
    workflow: string
    rpa: string
    crew: string
    crewNotes: string
    plannedDate: string
    plannedTime: string
    dayTime: string
    maximunHeight: string
    visualLineSight: string
    emergencyContacts: string
    radioFrequencies: string
}

const MissionForm: React.SFC<MissionFormProps> = ({
    name,
    objective,
    location,
    operationType,
    workflow,
    rpa,
    crew,
    crewNotes,
    plannedDate,
    plannedTime,
    dayTime,
    maximunHeight,
    visualLineSight,
    emergencyContacts,
    radioFrequencies,
    ...props
}) => (
    <Formik
        initialValues={{
            crew: '',
            crewNotes: '',
            dayTime: '',
            emergencyContacts: '',
            location: '',
            maximunHeight: '',
            name: '',
            objective: '',
            operationType: '',
            plannedDate: '',
            plannedTime: '',
            radioFrequencies: '',
            rpa: '',
            visualLineSight: '',
            workflow: '',
        }}
        enableReinitialize
        initialStatus={{ success: false, error: false }}
        onSubmit={submit(props)}
        render={(formikProps) => <Form {...formikProps} {...props} />}
    />
)

export default MissionForm
