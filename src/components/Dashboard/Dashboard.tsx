import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import Dialog from 'components/Dialog'
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

import Battery20Icon from '@material-ui/icons/Battery20'
import BatteryStdIcon from '@material-ui/icons/BatteryStd'
import BugReportIcon from '@material-ui/icons/BugReport'
import BuildIcon from '@material-ui/icons/Build'
import FlightIcon from '@material-ui/icons/Flight'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import LinkIcon from '@material-ui/icons/Link'
import ListIcon from '@material-ui/icons/List'
import ListAltIcon from '@material-ui/icons/ListAlt'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PeopleIcon from '@material-ui/icons/People'
import WarningIcon from '@material-ui/icons/Warning'

interface DashboardProps {
    classes: any
}

interface DialogProps {
    dOpen: boolean
    dTitle: string
    dActions: any
    dMaxWidth: any
    dFullWidth: boolean
    dFullScreen: boolean
    dChildren: any
}

const styles = (theme: any) => ({
    root: {
        marginLeft: 240,
    },
})

const Dashboard: React.SFC<DashboardProps> = ({ classes }) => {
    const [title, setTitle] = React.useState('')
    const [actions, setActions] = React.useState({})
    const [fullWidth, setFullWidth] = React.useState(true)
    const [open, setOpen] = React.useState(false)
    const [maxWidth, setMaxWidth] = React.useState('md')
    const [fullScreen, setFullScreen] = React.useState(false)
    const [dialogChildren, setChildren] = React.useState(null)

    const callDialog = ({
        dOpen,
        dTitle,
        dActions,
        dMaxWidth,
        dFullWidth,
        dFullScreen,
        dChildren,
    }: DialogProps) => {
        setOpen(dOpen)
        setTitle(dTitle)
        setActions(dActions)
        setMaxWidth(dMaxWidth)
        setFullWidth(dFullWidth)
        setFullScreen(dFullScreen)
        setChildren(dChildren)
    }

    const [menu, setMenu] = React.useState([
        {
            callDialog,
            component: Missions,
            icon: ListIcon,
            key: 'mission',
            label: 'Missions',
            selected: true,
            size: {},
        },
        {
            callDialog,
            component: Aircraft,
            icon: FlightIcon,
            key: 'rpa',
            label: 'RPA',
            selected: true,
            size: { md: 6 },
        },
        {
            callDialog,
            component: Personnel,
            icon: PeopleIcon,
            key: 'personnel',
            label: 'Personnel',
            selected: true,
            size: { md: 6 },
        },
        {
            callDialog,
            component: Batteries,
            icon: Battery20Icon,
            key: 'batteries',
            label: 'Batteries',
            selected: true,
            size: {},
        },
        {
            callDialog,
            component: BatterySets,
            icon: BatteryStdIcon,
            key: 'batterySets',
            label: 'Flight Battery Sets',
            selected: true,
            size: {},
        },
        {
            callDialog,
            component: MissionApprovals,
            icon: ListAltIcon,
            key: 'approvals',
            label: 'Approvals',
            selected: true,
            size: {},
        },
        {
            callDialog,
            component: Maintenance,
            icon: BuildIcon,
            key: 'maintenance',
            label: 'Maintenance',
            selected: true,
            size: {},
        },
        {
            callDialog,
            component: Locations,
            icon: LocationOnIcon,
            key: 'locations',
            label: 'Locations',
            selected: true,
            size: { md: 6 },
        },
        {
            callDialog,
            component: Libraries,
            icon: LibraryBooksIcon,
            key: 'libraries',
            label: 'Libraries',
            selected: true,
            size: { md: 6 },
        },
        {
            callDialog,
            component: IncidentReports,
            icon: BugReportIcon,
            key: 'incident',
            label: 'Incident Reports',
            selected: true,
            size: {},
        },
        {
            callDialog,
            component: RiskRegister,
            icon: WarningIcon,
            key: 'risk',
            label: 'Risk Register',
            selected: true,
            size: {},
        },
        {
            callDialog,
            component: OrganisationLinks,
            icon: LinkIcon,
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
                key: item.key,
            }),
        )
    }

    return (
        <Grid container>
            <Menu menu={menu} setMenu={setMenu} />

            <Grid container spacing={0} className={classes.root}>
                {loadMenu()}
            </Grid>

            <Dialog
                title={title}
                actions={actions}
                fullWidth={fullWidth}
                open={open}
                maxWidth={maxWidth}
                handleClose={() => setOpen(false)}
                fullScreen={fullScreen}
            >
                {dialogChildren}
            </Dialog>
        </Grid>
    )
}
export default withStyles(styles)(Dashboard)
