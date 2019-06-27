import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import Menu from 'components/Menu'
import * as React from 'react'
import Aircraft from 'widgets/Aircraft'
import Batteries from 'widgets/Batteries'
import BatterySets from 'widgets/BatterySets'
import IncidentReports from 'widgets/IncidentReports'
import Libraries from 'widgets/Libraries'
import Locations from 'widgets/Locations'
import Maintenance from 'widgets/Maintenance'
import Missions from 'widgets/Mission'
import MissionApprovals from 'widgets/MissionApprovals'
import OrganisationLinks from 'widgets/OrganisationLinks'
import Personnel from 'widgets/Personnel'
import RiskRegister from 'widgets/RiskRegister'

interface DashboardProps {
    classes: any
}

const styles = (theme: any) => ({
    root: {
        marginLeft: 240,
    },
})

const Dashboard: React.SFC<DashboardProps> = ({ classes }) => {
    const [menu, setMenu] = React.useState([
        {
            icon: '',
            key: 'approvals',
            label: 'Approvals',
            selected: true,
        },
        {
            icon: '',
            key: 'batteries',
            label: 'Batteries',
            selected: true,
        },
        {
            icon: '',
            key: 'batterySets',
            label: 'Flight Battery Sets',
            selected: true,
        },
        {
            icon: '',
            key: 'incident',
            label: 'Incident Reports',
            selected: true,
        },
        {
            icon: '',
            key: 'libraries',
            label: 'Libraries',
            selected: true,
        },
        {
            icon: '',
            key: 'locations',
            label: 'Locations',
            selected: true,
        },
        {
            icon: '',
            key: 'maintenance',
            label: 'Maintenance',
            selected: true,
        },
        {
            icon: '',
            key: 'mission',
            label: 'Missions',
            selected: true,
        },
        {
            icon: '',
            key: 'personnel',
            label: 'Personnel',
            selected: true,
        },
        {
            icon: '',
            key: 'reporting',
            label: 'Reporting',
            selected: true,
        },
        {
            icon: '',
            key: 'risk',
            label: 'Risk Register',
            selected: true,
        },
        {
            icon: '',
            key: 'rpa',
            label: 'RPA',
            selected: true,
        },
    ])

    return (
        <Grid container>
            <Menu menu={menu} setMenu={setMenu} />

            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={12}>
                    <Missions />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Aircraft />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Personnel />
                </Grid>

                <Grid item xs={12}>
                    <Batteries />
                </Grid>

                <Grid item xs={12}>
                    <BatterySets />
                </Grid>

                <Grid item xs={12}>
                    <MissionApprovals />
                </Grid>

                <Grid item xs={12}>
                    <Maintenance />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Locations />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Libraries />
                </Grid>

                <Grid item xs={12}>
                    <IncidentReports />
                </Grid>

                <Grid item xs={12}>
                    <RiskRegister />
                </Grid>

                <Grid item xs={12} md={6}>
                    <OrganisationLinks />
                </Grid>
            </Grid>
        </Grid>
    )
    // }
}
export default withStyles(styles)(Dashboard)
