import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
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
import Dialog, { FlyDialogProps } from 'components/Dialog'
import Menu from 'components/Menu'
import * as React from 'react'
import styled from 'styled-components'
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
    width: any
}

const FlyBox = styled(Box)`
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: hidden;
`

const Container = styled(Grid)`
    overflow-x: hidden;
    overflow-y: hidden;
`

const Dashboard: React.SFC<DashboardProps> = ({ width }) => {
    const defaultDialog: FlyDialogProps = {
        actions: null,
        children: null,
        fullScreen: false,
        fullWidth: true,
        maxWidth: 'md',
        open: false,
        title: '',
    }
    const [dialogProps, setDialog] = React.useState(defaultDialog)

    const [menu, setMenu] = React.useState([
        {
            component: Missions,
            icon: ListIcon,
            key: 'mission',
            label: 'Missions',
            selected: true,
            size: {},
        },
        {
            component: Aircraft,
            icon: FlightIcon,
            key: 'rpa',
            label: 'RPA',
            selected: true,
            size: { md: 6 },
        },
        {
            component: Personnel,
            icon: PeopleIcon,
            key: 'personnel',
            label: 'Personnel',
            selected: true,
            size: { md: 6 },
        },
        {
            component: Batteries,
            icon: Battery20Icon,
            key: 'batteries',
            label: 'Batteries',
            selected: true,
            size: {},
        },
        {
            component: BatterySets,
            icon: BatteryStdIcon,
            key: 'batterySets',
            label: 'Flight Battery Sets',
            selected: true,
            size: {},
        },
        {
            component: MissionApprovals,
            icon: ListAltIcon,
            key: 'approvals',
            label: 'Approvals',
            selected: true,
            size: {},
        },
        {
            component: Maintenance,
            icon: BuildIcon,
            key: 'maintenance',
            label: 'Maintenance',
            selected: true,
            size: {},
        },
        {
            component: Locations,
            icon: LocationOnIcon,
            key: 'locations',
            label: 'Locations',
            selected: true,
            size: { md: 6 },
        },
        {
            component: Libraries,
            icon: LibraryBooksIcon,
            key: 'libraries',
            label: 'Libraries',
            selected: true,
            size: { md: 6 },
        },
        {
            component: IncidentReports,
            icon: BugReportIcon,
            key: 'incident',
            label: 'Incident Reports',
            selected: true,
            size: {},
        },
        {
            component: RiskRegister,
            icon: WarningIcon,
            key: 'risk',
            label: 'Risk Register',
            selected: true,
            size: {},
        },
        {
            component: OrganisationLinks,
            icon: LinkIcon,
            key: 'organisationLinks',
            label: 'Organisation Links',
            selected: true,
            size: { md: 6 },
        },
    ])

    const loadWidgets = menu.map((item) =>
        React.createElement(item.component, {
            item,
            key: item.key,
            setDialog,
        }),
    )

    const isMediumUp = isWidthUp('sm', width)

    return (
        <Container container>
            <Menu menu={menu} setMenu={setMenu} setDialog={setDialog} />

            <FlyBox ml={isMediumUp ? 30 : 0} pt={isMediumUp ? 0 : 5}>
                <Grid container spacing={0}>
                    {loadWidgets}
                </Grid>
            </FlyBox>

            <Dialog
                {...dialogProps}
                handleClose={() =>
                    setDialog({
                        ...defaultDialog,
                        open: false,
                    })
                }
            />
        </Container>
    )
}
export default withWidth()(Dashboard)
