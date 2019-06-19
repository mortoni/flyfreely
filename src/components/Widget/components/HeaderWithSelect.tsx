import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/styles'
import FormControl from '@material-ui/core/FormControl'
import * as React from 'react'

export interface IHeaderWithSelectProps {
    headerButtons?: any[]
    classes: any
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        color: '#fafafa !important',
    },
    title: {
        flex: 0.7
    },
    select: {
        flex: 0.3,
    },
    selectInput: {
        '&svg': {
            borderColor: '#fafafa',
            fill: '#fafafa',
            color: '#fafafa',
        }

    },
    selectField: {
        backgroundColor: '#fafafa'
    },
    menuItem: {
        color: '#fafafa',
        '&$selected': {
            backgroundColor: '#fafafa',
        },
    }

}

const HeaderWithSelect: React.SFC<IHeaderWithSelectProps> = ({ classes,  }) => {

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <Typography variant="h5" component="h6">
                    Test
                </Typography>
            </div>
            <div className={classes.select}>
                <FormControl className={classes.formControl} fullWidth>
                    {/* <InputLabel htmlFor="age-simple" classes={{ root: classes.inputLabel }}>Age</InputLabel> */}
                    <Select
                        value={10}
                        onChange={() => { }}
                        classes={{ root: classes.selectInput, select: classes.selectField }}
                        inputProps={{
                            name: 'age',
                            id: 'age-simple',
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default withStyles(styles)(HeaderWithSelect)
