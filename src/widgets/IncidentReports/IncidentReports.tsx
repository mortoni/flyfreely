import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface IncidentReportsProps {}

const IncidentReports: React.SFC<IncidentReportsProps> = ({}) => {
    const headerButtons = [
        {
            action: () => () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'IncidentReports'} headerButtons={headerButtons}>
            Incident Reports content
        </Widget>
    )
}
export default IncidentReports
