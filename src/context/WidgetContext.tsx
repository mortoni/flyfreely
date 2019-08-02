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

export interface WidgetInterface {
    component: any
    icon: any
    key: string
    label: string
    selected: boolean
    size: any
}

export interface WidgetContextInterface {
    widgets: WidgetInterface[]
    handleWidget: any
}

export const defaultWidgets = [
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
]

export const WidgetContext = React.createContext<WidgetContextInterface>({
    handleWidget: () => {},
    widgets: defaultWidgets,
})
