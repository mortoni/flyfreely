import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import CalendarIcon from '@material-ui/icons/CalendarToday'
import * as React from 'react'

interface DateInputInterface {
    label: string
    name: string
    value: any
    onClick: any
    error?: boolean
    touched?: boolean
    type?: string
    ControlProps?: any
    InputProps?: any
}

const DateInput: React.SFC<DateInputInterface> = ({
    label,
    value,
    error,
    touched,
    ControlProps,
    InputProps,
    onClick,
}) => (
    <FormControl fullWidth error={error && touched} {...ControlProps}>
        <InputLabel shrink>{label}</InputLabel>
        <Input
            value={value}
            onClick={onClick}
            startAdornment={
                <InputAdornment position='start'>
                    <CalendarIcon fontSize='small' />
                </InputAdornment>
            }
            {...InputProps}
        />
    </FormControl>
)

export default DateInput
