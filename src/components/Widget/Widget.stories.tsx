import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/AddCircleOutline'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ShareIcon from '@material-ui/icons/Share'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { withKnobs } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { format } from 'date-fns'
import * as React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import Fecth from '../Fetch'
import Spinner from '../Spinner'
import Table from '../Table'
import Widget from './Widget'

const item = {
    component: null,
    icon: '',
    key: 'mission',
    label: 'Missions',
    selected: true,
    size: {},
}

storiesOf('Components/Widget', module)
    .addDecorator(jsxDecorator)
    .addDecorator(withKnobs)
    .add('normal', () => {
        const title = text('Title', 'Mission')
        const subheader = text('Subheader', 'this is a mission subheader test')
        const headerButtons = [
            {
                action: () => action('onVertButton'),
                component: <MoreVertIcon />,
                key: 'moreVertIcon',
            },
            {
                action: () => action('onAddButton'),
                component: <AddIcon />,
                key: 'addIcon',
            },
        ]

        return (
            <Widget
                item={item}
                title={title}
                subheader={subheader}
                headerButtons={headerButtons}
            >
                <Typography variant='body2' color='textSecondary' component='p'>
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                </Typography>
            </Widget>
        )
    })
    .add('with footer buttons', () => {
        const title = text('Title', 'Mission')
        const subheader = text('Subheader', 'this is a mission subheader test')
        const footerButtons = [
            {
                action: () => action('onFavoriteButton'),
                component: <FavoriteIcon />,
            },
            { component: <ShareIcon />, action: () => action('onShareButton') },
        ]
        const headerButtons = [
            {
                action: () => action('onAddButton'),
                component: <AddIcon />,
                key: 'addIcon',
            },
        ]

        return (
            <Widget
                item={item}
                title={title}
                subheader={subheader}
                footerButtons={footerButtons}
                headerButtons={headerButtons}
            >
                <Typography variant='body2' color='textSecondary' component='p'>
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                </Typography>
            </Widget>
        )
    })
    .add('with table simulator', () => {
        const headerButtons = [
            {
                action: () => action('onAddAction'),
                component: <AddIcon />,
                key: 'addIcon',
            },
        ]

        const columns = [
            { title: 'Name', field: 'name' },
            {
                field: 'missionDate',
                render: (rowData: any) =>
                    format(new Date(rowData.missionDate), 'Do MMM yyyy HH:MM'),
                title: 'Date/Time',
            },
            { title: 'Location', field: 'locationName' },
            { title: 'Status', field: 'status' },
            { title: 'Operation Type', field: 'missionType.name' },
            {
                field: 'missionCrewDetails[0]',
                render: (rowData: any) =>
                    rowData.missionCrewDetails &&
                    rowData.missionCrewDetails[0] &&
                    `${rowData.missionCrewDetails[0].person.firstName}
                    ${rowData.missionCrewDetails[0].person.lastName}`,

                title: 'Crew',
            },
            { title: 'RPA', field: 'craftNicknames' },
            { title: 'Workflow', field: 'missionWorkflowVersion.workflowName' },
        ]

        const options = {
            filtering: true,
            headerStyle: { backgroundColor: '#fafafa' },
            padding: 'dense',
            pageSize: 5,
            pageSizeOptions: [],
        }

        return (
            <Fecth url='missions'>
                {({ data, err, loading }: any) => (
                    <Widget
                        title={'Missions'}
                        headerButtons={headerButtons}
                        item={item}
                    >
                        <Spinner condition={loading}>
                            <Table
                                columns={columns}
                                data={data}
                                options={options}
                            />
                        </Spinner>
                    </Widget>
                )}
            </Fecth>
        )
    })
