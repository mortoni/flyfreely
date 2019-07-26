import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import * as React from 'react'

interface SelectFieldProps {
    label: string
    field: any
    form: any
    type: string
    ControlProps: any
    SelectProps: any
    required: boolean
}

const SelectField: React.SFC<SelectFieldProps> = ({
    field: { name, value, onChange, onBlur },
    form: { errors, touched },
    ControlProps,
    SelectProps,
    label,
    children,
    required,
}) => (
    <FormControl
        fullWidth
        error={!!errors[name] && touched[name]}
        required={required}
        {...ControlProps}
    >
        {label ? <InputLabel htmlFor={name}>{label}</InputLabel> : null}
        <Select
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            {...SelectProps}
        >
            {children}
        </Select>
    </FormControl>
)

export default SelectField
