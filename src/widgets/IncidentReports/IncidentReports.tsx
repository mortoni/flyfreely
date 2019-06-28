import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface IncidentReportsProps {
    item: any
}

const IncidentReports: React.SFC<IncidentReportsProps> = ({ item }) => {
    const headerButtons = [
        {
            action: () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget
            title={'IncidentReports'}
            headerButtons={headerButtons}
            item={item}
        >
            Incident Reports content
        </Widget>
    )
}
export default IncidentReports
