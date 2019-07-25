import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import * as React from 'react'

interface InputFieldProps {
    label: string
    field: any
    form: any
    type: string
    ControlProps: any
    InputProps: any
    required: boolean
}

const InputField: React.SFC<InputFieldProps> = ({
    field: { name, value, onChange, onBlur },
    form: { errors, touched },
    required,
    ControlProps,
    InputProps,
    type,
    label,
}) => (
    <FormControl
        fullWidth
        error={!!errors[name] && touched[name]}
        required={required}
        {...ControlProps}
    >
        <InputLabel>{label}</InputLabel>
        <Input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            {...InputProps}
        />
    </FormControl>
)

export default InputField
