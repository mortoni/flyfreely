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
interface DashboardState {
    menu: any
}

const styles = (theme: any) => ({
    root: {
        marginLeft: 240,
    },
})
class Dashboard extends React.Component<DashboardProps, DashboardState> {
    constructor(props: DashboardProps) {
        super(props)
        this.state = {
            menu: [
                { label: 'Missions', icon: '', route: '', selected: true },
                { label: 'Personnel', icon: '', route: '', selected: true },
                { label: 'Locations', icon: '', route: '', selected: true },
                { label: 'Approvals', icon: '', route: '', selected: true },
                { label: 'RPA', icon: '', route: '', selected: true },
                { label: 'Maintenance', icon: '', route: '', selected: true },
                {
                    icon: '',
                    label: 'Flight Battery Sets',
                    route: '',
                    selected: true,
                },
                { label: 'Batteries', icon: '', route: '', selected: true },
                { label: 'Labraries', icon: '', route: '', selected: true },
                { label: 'Reporting', icon: '', route: '', selected: true },
                {
                    icon: '',
                    label: 'Incident Reports',
                    route: '',
                    selected: true,
                },
                { label: 'Risk Register', icon: '', route: '', selected: true },
            ],
        }
    }

    public render() {
        const { classes } = this.props
        return (
            <Grid container>
                <Menu menu={this.state.menu} />

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
    }
}
export default withStyles(styles)(Dashboard)
