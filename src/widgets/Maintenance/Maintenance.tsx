import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface MaintenanceProps {
    item: any
    setDialog: any
}

const Maintenance: React.SFC<MaintenanceProps> = ({ item, setDialog }) => {
    const headerButtons = [
        {
            action: () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'Maintenance'} headerButtons={headerButtons} item={item}>
            Maintenance content
        </Widget>
    )
}
export default Maintenance
