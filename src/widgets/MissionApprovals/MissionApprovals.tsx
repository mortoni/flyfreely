import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface MissionApprovalsProps {
    item: any
    callDialog: any
}

const MissionApprovals: React.SFC<MissionApprovalsProps> = ({
    item,
    callDialog,
}) => {
    const headerButtons = [
        {
            action: () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget
            title={'MissionApprovals'}
            headerButtons={headerButtons}
            item={item}
        >
            Mission Approvals content
        </Widget>
    )
}
export default MissionApprovals
