import { array, object, string } from 'yup'

export default ({}) =>
    object({
        crew: array().of(
            object().shape({
                person: string()
                    .nullable()
                    .required('Person is required'),
                role: string()
                    .nullable()
                    .required('Role is required'),
            }),
        ),
    })
