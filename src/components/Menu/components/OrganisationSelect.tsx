import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/styles'
import * as React from 'react'
import styled from 'styled-components'

export interface OrganisationSelectProps {
    classes: any
    menu: any
}

// TODO: remove this styles and work with styled component
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

const FlyInput = styled(TextField)`
    margin-left: ${(props) => props.theme.spacing(1)};
    margin-right: ${(props) => props.theme.spacing(1)};
    width: 200;
`

const OrganisationSelect: React.SFC<OrganisationSelectProps> = ({}) => {
    const [value, setValue] = React.useState('Org 1')
    const organisations = [
        {
            label: 'Org 1',
            value: 'org1',
        },
        {
            label: 'Org 2',
            value: 'org2',
        },
        {
            label: 'Org 3',
            value: 'org3',
        },
    ]
    return (
        <FlyInput
            id='organisation-select'
            select
            label='Organisation'
            value={value}
            onChange={() => setValue()}
            margin='normal'
        >
            {organisations.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </FlyInput>
    )
}
export default withStyles(styles)(OrganisationSelect)
