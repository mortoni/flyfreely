import Typography from '@material-ui/core/Typography'
import * as React from 'react'

export interface DefaultProps {
    /** Something */
    something?: boolean
}

const Default: React.SFC<DefaultProps> = ({
    something,
}) => (
        <Typography variant='h1' component='h2'>
            Default
    </Typography>
    )

export default Default
