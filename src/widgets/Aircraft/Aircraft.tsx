import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface AircraftProps {
    item: any
    setDialog: any
}

const Aircraft: React.SFC<AircraftProps> = ({ item, setDialog }) => {
    const headerButtons = [
        {
            action: () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'Aircraft'} headerButtons={headerButtons} item={item}>
            Aircraft content
        </Widget>
    )
}
export default Aircraft
