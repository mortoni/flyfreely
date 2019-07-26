import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'

interface MissionCreatedProps {
    initialValues: any
    onComplete: any
    onBack: any
}

const MissionCreated: React.SFC<MissionCreatedProps> = ({
    initialValues,
    onComplete,
    onBack,
    ...props
}) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography component='div' variant='h6' color='textSecondary'>
                    Mission Overview
                </Typography>
            </Grid>
        </Grid>
    )
}

export default MissionCreated
