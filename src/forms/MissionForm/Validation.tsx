import { object, string } from 'yup'

export default ({}) =>
    object({
        name: string()
            .trim('Please enter mission name')
            .required('Please enter mission name'),
    })
