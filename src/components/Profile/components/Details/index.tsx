import Grid from '@material-ui/core/Grid'
import * as React from 'react'
import Address from './address'
import Organisations from './organisations'
import Perfil from './perfil'

const Details: React.SFC = ({}) => {
    return (
        <Grid container spacing={2}>
            <Grid xs={12} item>
                <Perfil />
            </Grid>

            <Grid xs={12} item>
                <Address />
            </Grid>

            <Grid xs={12} item>
                <Organisations />
            </Grid>
        </Grid>
    )
}

export default Details
