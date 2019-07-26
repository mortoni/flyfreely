import AddIcon from '@material-ui/icons/AddCircleOutline'
import FileCopy from '@material-ui/icons/FileCopy'
import Fecth from 'components/Fetch'
import Spinner from 'components/Spinner'
import Table from 'components/Table'
import Widget from 'components/Widget'
import { format } from 'date-fns'
import MissionForm from 'forms/MissionForm'
import * as React from 'react'

export interface MissionsProps {
    item: any
    setDialog: any
}

const Missions: React.SFC<MissionsProps> = ({ item, setDialog }) => {
    const onAdd = () => {
        setDialog({
            actions: null,
            children: React.createElement(MissionForm, null),
            fullScreen: false,
            fullWidth: true,
            maxWidth: 'md',
            open: true,
            title: 'New Mission',
        })
    }

    const headerButtons = [
        {
            action: onAdd,
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    const handleCloneMission = (event: any, rowData: any) => {}

    const actions = [
        {
            icon: () => <FileCopy color='primary' />,
            onClick: handleCloneMission,
            tooltip: 'Clone Missions',
        },
    ]

    const columns = [
        { title: 'Name', field: 'name', removable: false },
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
            removable: false,
            render: (rowData: any) =>
                rowData.missionCrewDetails &&
                rowData.missionCrewDetails[0] &&
                `${rowData.missionCrewDetails[0].person.firstName} ${rowData.missionCrewDetails[0].person.lastName}`,
            title: 'Crew',
        },
        { title: 'RPA', field: 'craftNicknames' },
        { title: 'Workflow', field: 'missionWorkflowVersion.workflowName' },
    ]

    const localization = {
        toolbar: {
            addRemoveColumns: 'test',
        },
    }

    const options = {
        actionsColumnIndex: -1,
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
                            actions={actions}
                            localization={localization}
                        />
                    </Spinner>
                </Widget>
            )}
        </Fecth>
    )
}

export default Missions
