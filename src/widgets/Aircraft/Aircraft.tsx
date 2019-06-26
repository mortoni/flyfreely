import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface AircraftProps {}

const Aircraft: React.SFC<AircraftProps> = ({}) => {
    const headerButtons = [
        {
            action: () => () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'Aircraft'} headerButtons={headerButtons}>
            Aircraft content
        </Widget>
    )
}
export default Aircraft
