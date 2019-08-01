import { object, string } from 'yup'

export default ({}) =>
    object({
        location: string()
            .trim('Please enter mission location')
            .required('Please enter mission location'),
        name: string()
            .trim('Please enter mission name')
            .required('Please enter mission name'),
    })
