import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface MaintenanceProps {}

const Maintenance: React.SFC<MaintenanceProps> = ({}) => {
    const headerButtons = [
        {
            action: () => () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'Maintenance'} headerButtons={headerButtons}>
            Maintenance content
        </Widget>
    )
}
export default Maintenance
