import FormControl from '@material-ui/core/FormControl'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'
import NativeSelect from '@material-ui/core/NativeSelect'
import { withStyles } from '@material-ui/styles'
import * as React from 'react'

export interface OrganisationSelectProps {
    classes: any
    menu: any
}

const styles = (theme: any) => ({
    checkbox: {
        position: 'absolute',
        right: 0,
    },
    label: {
        justifyContent: 'flex-end',
        width: '100%',
    },
})
const BootstrapInput = withStyles((theme) => ({
    input: {
        '&:focus': {
            borderColor: '#80bdff',
            borderRadius: 4,
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
        'backgroundColor': theme.palette.background.paper,
        'border': '1px solid',
        'borderImageSlice': 1,
        'borderImageSource':
            'linear-gradient(to right, #007dd5 30%, #33ccff 100%)',
        'borderRadius': 4,
        'fontFamily': [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        'fontSize': 16,
        'padding': '5px 26px 5px 10px',
        'position': 'relative',
        'transition': theme.transitions.create(['border-color', 'box-shadow']),
        'width': '180px',
        // Use the system font instead of the default Roboto font.
    },
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
}))(InputBase)

const OrganisationSelect: React.SFC<OrganisationSelectProps> = ({}) => {
    const [age, setAge] = React.useState('')
    const handleChange = (event: any) => {
        setAge(event.target.value)
    }
    return (
        <FormControl>
            <InputLabel htmlFor='age-customized-native-simple'>
                Organisation
            </InputLabel>
            <NativeSelect
                value={age}
                onChange={handleChange}
                input={
                    <BootstrapInput
                        name='age'
                        id='age-customized-native-simple'
                    />
                }
            >
                <option value='' />
                <option value={10}>Own ReOC Admin(Personal)</option>
                <option value={20}>Dev Business Customer(Commercial)</option>
                <option value={30}>Mobile App Org(Commercial)</option>
            </NativeSelect>
        </FormControl>
    )
}
export default withStyles(styles)(OrganisationSelect)
