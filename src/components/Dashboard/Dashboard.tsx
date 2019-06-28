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
            component: Missions,
            icon: '',
            key: 'mission',
            label: 'Missions',
            selected: true,
            size: {},
        },
        {
            component: Aircraft,
            icon: '',
            key: 'rpa',
            label: 'RPA',
            selected: true,
            size: { md: 6 },
        },
        {
            component: Personnel,
            icon: '',
            key: 'personnel',
            label: 'Personnel',
            selected: true,
            size: { md: 6 },
        },
        {
            component: Batteries,
            icon: '',
            key: 'batteries',
            label: 'Batteries',
            selected: true,
            size: {},
        },
        {
            component: BatterySets,
            icon: '',
            key: 'batterySets',
            label: 'Flight Battery Sets',
            selected: true,
            size: {},
        },
        {
            component: MissionApprovals,
            icon: '',
            key: 'approvals',
            label: 'Approvals',
            selected: true,
            size: {},
        },
        {
            component: Maintenance,
            icon: '',
            key: 'maintenance',
            label: 'Maintenance',
            selected: true,
            size: {},
        },
        {
            component: Locations,
            icon: '',
            key: 'locations',
            label: 'Locations',
            selected: true,
            size: { md: 6 },
        },
        {
            component: Libraries,
            icon: '',
            key: 'libraries',
            label: 'Libraries',
            selected: true,
            size: { md: 6 },
        },
        {
            component: IncidentReports,
            icon: '',
            key: 'incident',
            label: 'Incident Reports',
            selected: true,
            size: {},
        },
        {
            component: RiskRegister,
            icon: '',
            key: 'risk',
            label: 'Risk Register',
            selected: true,
            size: {},
        },
        {
            component: OrganisationLinks,
            icon: '',
            key: 'organisationLinks',
            label: 'Organisation Links',
            selected: true,
            size: { md: 6 },
        },
    ])

    const loadMenu = () => {
        return menu.map((item) =>
            React.createElement(item.component, {
                item,
            }),
        )
    }

    return (
        <Grid container>
            <Menu menu={menu} setMenu={setMenu} />

            <Grid container spacing={0} className={classes.root}>
                {loadMenu()}
            </Grid>
        </Grid>
    )
}
export default withStyles(styles)(Dashboard)
