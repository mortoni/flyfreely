import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface BatteriesProps {
    item: any
    callDialog: any
}

const Batteries: React.SFC<BatteriesProps> = ({ item, callDialog }) => {
    const headerButtons = [
        {
            action: () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'Batteries'} headerButtons={headerButtons} item={item}>
            Batteries content
        </Widget>
    )
}
export default Batteries
