import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface LocationsProps {}

const Locations: React.SFC<LocationsProps> = ({}) => {
    const headerButtons = [
        {
            action: () => () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'Locations'} headerButtons={headerButtons}>
            Location content
        </Widget>
    )
}
export default Locations
