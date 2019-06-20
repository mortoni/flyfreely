import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/AddCircleOutline'
import * as React from 'react'
import Missions from '../../widgets/Mission'
import Widget from '../Widget'

export interface DashboardProps {
    /** Something */
    something?: boolean
}
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))
const Dashboard: React.SFC<DashboardProps> = ({ something }) => {
    const headerButtons = [
        { component: <AddIcon />, action: () => { } },
    ]

    return (
        <Grid container={true} spacing={2}>
            <Grid item={true} xs={12}>
                <Missions />
            </Grid>

            <Grid item={true} xs={12} md={6}>
                <Widget title={'RPA(Remotely Piloted Aircraft)'} headerButtons={headerButtons}>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                </Widget>
            </Grid>

            <Grid item={true} xs={12} md={6}>
                <Widget title={'Personnel'} headerButtons={headerButtons}>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                </Widget>
            </Grid>

            <Grid item={true} xs={12}>
                <Widget title={'Batteries'} headerButtons={headerButtons}>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                </Widget>
            </Grid>

            <Grid item={true} xs={12}>
                <Widget title={'Flight Battery Sets'} headerButtons={headerButtons}>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                </Widget>
            </Grid>

            <Grid item={true} xs={12}>
                <Widget title={'Mission Approvals'} headerButtons={headerButtons}>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                </Widget>
            </Grid>

            <Grid item={true} xs={12}>
                <Widget title={'Maintenance'} headerButtons={headerButtons}>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                </Widget>
            </Grid>

            <Grid item={true} xs={12} md={6}>
                <Widget title={'Locations'} headerButtons={headerButtons}>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                </Widget>
            </Grid>

            <Grid item={true} xs={12} md={6}>
                <Widget title={'Document Libraries'} headerButtons={headerButtons}>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                </Widget>
            </Grid>

            <Grid item={true} xs={12}>
                <Widget title={'Incident Reports'} headerButtons={headerButtons}>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                </Widget>
            </Grid>

            <Grid item={true} xs={12}>
                <Widget title={'Risk Register'} headerButtons={headerButtons}>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                </Widget>
            </Grid>

            <Grid item={true} xs={12} md={6}>
                <Widget title={'Organisation Links'} headerButtons={headerButtons}>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                </Widget>
            </Grid>
        </Grid>
    )
}
export default Dashboard
