import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/RemoveCircle'
import FieldError from 'components/FieldError'
// import Select from '@material-ui/core/Select'
import Select from 'components/Select'
import * as React from 'react'

export interface CrewProps {
    field: any
    form: any
    roles: any[]
    personList: any[]
}

const defaultProps: CrewProps = {
    field: {},
    form: {},
    personList: [
        { value: '1', label: 'Anthony Hopkins' },
        { value: '2', label: 'McFace Pilot' },
    ],
    roles: [
        { value: 'RPC', label: 'Remote Pilot in Command' },
        { value: 'RP', label: 'Remote Pilot' },
        { value: 'RPAO', label: 'RPA Observer' },
        { value: 'PO', label: 'Payload Operator' },
        { value: 'TRP', label: 'Trainee Remote Pilot' },
    ],
}

const reduceMultiDestination = (state: any, { type, index, value }: any) => {
    const arr = state.slice(0)

    switch (type) {
        case 'add':
            arr.push({ role: null, person: null })
            return arr
        case 'remove':
            arr.splice(index, 1)
            return arr
        case 'role':
        case 'person':
            arr[index][type] = value
            return arr
        default:
            return state
    }
}
const Crew: React.SFC<CrewProps> = ({
    field: { name, value },
    form: {
        errors: { crew: errors = [] },
        touched: { crew: touched = [] },
        setFieldValue,
        validateField,
    },
    roles,
    personList,
}) => {
    const [state, dispatch] = React.useReducer(reduceMultiDestination, value)

    React.useEffect(() => {
        validateField(name)
        setFieldValue(name, state)
    }, [state, setFieldValue, validateField, name])
    return (
        <Grid container spacing={2} justify='space-between' alignItems='center'>
            {state.map((item: any, index: number) => (
                <Grid
                    key={`${item.date + index}`}
                    item
                    xs={12}
                    direction='row'
                    container
                >
                    <Grid item xs={6}>
                        <Select
                            form={{
                                errors: errors[index] || [],
                                touched: touched[index] || [],
                            }}
                            field={{
                                name: 'role',
                                onChange: (role: any) =>
                                    dispatch({
                                        index,
                                        type: 'role',
                                        value: role.target.value,
                                    }),
                                value: item.role,
                            }}
                            label='Role'
                        >
                            {roles.map((role: any) => (
                                <MenuItem key={role.value} value={role.value}>
                                    {role.label}
                                </MenuItem>
                            ))}
                        </Select>
                        <FieldError name={`crew[${index}].role`} />
                    </Grid>

                    <Grid item xs={5}>
                        <Select
                            form={{
                                errors: errors[index] || [],
                                touched: touched[index] || [],
                            }}
                            field={{
                                name: 'person',
                                onChange: (person: any) =>
                                    dispatch({
                                        index,
                                        type: 'person',
                                        value: person.target.value,
                                    }),
                                value: item.person,
                            }}
                            label='Person'
                        >
                            {personList.map((person: any) => (
                                <MenuItem
                                    key={person.value}
                                    value={person.value}
                                >
                                    {person.label}
                                </MenuItem>
                            ))}
                        </Select>
                        <FieldError name={`crew[${index}].person`} />
                    </Grid>

                    <Grid
                        item
                        xs={1}
                        alignContent='center'
                        alignItems='center'
                        container
                    >
                        <IconButton
                            aria-label='Remove'
                            onClick={() => dispatch({ type: 'remove', index })}
                        >
                            <RemoveIcon color='primary' />
                        </IconButton>
                    </Grid>
                </Grid>
            ))}
            <Grid item xs={12}>
                <Button
                    type='button'
                    variant='contained'
                    disabled={state.length >= personList.length}
                    onClick={() => dispatch({ type: 'add' })}
                >
                    <AddIcon color='inherit' />
                    <Typography variant='body2' noWrap>
                        ADD CREW
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    )
}

Crew.defaultProps = defaultProps

export default withWidth()(Crew)
