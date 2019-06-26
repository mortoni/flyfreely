import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface MissionsProps {}

const Missions: React.SFC<MissionsProps> = ({}) => {
    const headerButtons = [
        {
            action: () => () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'Missions'} headerButtons={headerButtons}>
            Missions content
        </Widget>
    )
}
export default Missions
