import FormHelperText from '@material-ui/core/FormHelperText'
import { ErrorMessage } from 'formik'
import * as React from 'react'

interface FormErrorProps {
    children: any
}

const FormError: React.SFC<FormErrorProps> = ({ children }) => (
    <FormHelperText component='div' error>
        {children}
    </FormHelperText>
)

const FieldError: React.SFC<any> = (props) => (
    <ErrorMessage component={FormError} {...props} />
)

export default FieldError
