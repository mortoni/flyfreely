import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface MissionApprovalsProps {}

const MissionApprovals: React.SFC<MissionApprovalsProps> = ({}) => {
    const headerButtons = [
        {
            action: () => () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'MissionApprovals'} headerButtons={headerButtons}>
            Mission Approvals content
        </Widget>
    )
}
export default MissionApprovals
