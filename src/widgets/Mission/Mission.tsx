import AddIcon from '@material-ui/icons/AddCircleOutline'
import Table from 'components/Table'
import Widget from 'components/Widget'
import * as React from 'react'

export interface MissionsProps {
    item: any
    setDialog: any
}

const Missions: React.SFC<MissionsProps> = ({ item, setDialog }) => {
    const onAdd = () => {
        setDialog({
            actions: null,
            children: null,
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

    const columns = [
        { title: 'Name', field: 'name' },
        { title: 'Date/Time', field: 'timestamp' },
        { title: 'Location', field: 'location' },
        { title: 'Status', field: 'status' },
        { title: 'Operation Type', field: 'operationType' },
        { title: 'Crew', field: 'crew' },
        { title: 'RPA', field: 'rpa' },
        { title: 'Workflow', field: 'workflow' },
    ]
    const data = []
    const options = {
        filtering: true,
        headerStyle: { backgroundColor: '#fafafa' },
        padding: 'dense',
        pageSize: 5,
        pageSizeOptions: [],
    }
    return (
        <Widget title={'Missions'} headerButtons={headerButtons} item={item}>
            <Table columns={columns} data={data} options={options} />
        </Widget>
    )
}
export default Missions
