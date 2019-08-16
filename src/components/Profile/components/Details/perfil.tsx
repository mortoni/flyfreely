import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import demo = require('assets/demo.png')
import * as React from 'react'

const Perfil: React.SFC = ({}) => {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={1} wrap='nowrap'>
                    <Grid xs={3} item>
                        <Grid
                            container
                            direction='row'
                            justify='center'
                            alignItems='center'
                            style={{ height: '100%' }}
                        >
                            <Avatar alt='Organisation' src={String(demo)} />
                        </Grid>
                    </Grid>
                    <Grid xs={9} item>
                        <Typography variant='h5' gutterBottom>
                            Own ReOC Admin
                        </Typography>
                        {/* TODO: create a component that return key value with typography */}
                        <Typography color='textSecondary' gutterBottom>
                            <strong>Email:</strong>{' '}
                            testing+ownreocadmin@flyfreely.io
                        </Typography>
                        <Typography color='textSecondary' gutterBottom>
                            <strong>Date of Birth:</strong> 14th Nov 1988
                        </Typography>
                        <Typography color='textSecondary' gutterBottom>
                            <strong>ARN:</strong> 123456789
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Grid container justify='flex-end'>
                    <Button size='small'>Edit</Button>
                    <Button size='small'>Change Password</Button>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default Perfil
