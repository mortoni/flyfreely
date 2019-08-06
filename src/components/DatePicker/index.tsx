import { DatePicker } from '@material-ui/pickers'
import * as React from 'react'
import DateInput from './DateInput'

interface DateFieldInterface {
    label: string
    field: any
    form: any
    minDate?: Date
    format?: string
}

const DateField: React.SFC<DateFieldInterface> = ({
    field: { name, value },
    form: { errors, touched, setFieldValue },
    label,
    minDate,
    ...props
}) => {
    return (
        <DatePicker
            name={name}
            label={label}
            value={value}
            onChange={(date) => setFieldValue(name, date)}
            disablePast
            clearable
            fullWidth
            error={!!errors[name]}
            touched={touched[name]}
            TextFieldComponent={DateInput}
            minDate={minDate}
            {...props}
        />
    )
}

export default DateField
