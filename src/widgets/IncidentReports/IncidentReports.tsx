import * as React from 'react'
import Widget from '../../components/Widget/index'
import AddIcon from '@material-ui/icons/AddCircleOutline'

export interface IIncidentReportsProps {

}

const IncidentReports: React.SFC<IIncidentReportsProps> = ({ }) => {
    const headerButtons = [
        { component: <AddIcon />, action: () => { } },
    ]

    return (
        <Widget title={'IncidentReports'} headerButtons={headerButtons}>

        </Widget>
    );
}
export default IncidentReports;
