import * as React from 'react'
import Widget from '../../components/Widget/index'
import AddIcon from '@material-ui/icons/AddCircleOutline'

export interface IMissionApprovalsProps {

}

const MissionApprovals: React.SFC<IMissionApprovalsProps> = ({ }) => {
    const headerButtons = [
        { component: <AddIcon />, action: () => { } },
    ]

    return (
        <Widget title={'MissionApprovals'} headerButtons={headerButtons}>

        </Widget>
    );
}
export default MissionApprovals;
