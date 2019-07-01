import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface LocationsProps {
    item: any
    callDialog: any
}

const Locations: React.SFC<LocationsProps> = ({ item, callDialog }) => {
    const headerButtons = [
        {
            action: () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'Locations'} headerButtons={headerButtons} item={item}>
            Location content
        </Widget>
    )
}
export default Locations
