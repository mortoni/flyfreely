import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface MissionsProps {
    item: any
}

const Missions: React.SFC<MissionsProps> = ({ item }) => {
    const headerButtons = [
        {
            action: () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'Missions'} headerButtons={headerButtons} item={item}>
            Missions content
        </Widget>
    )
}
export default Missions
