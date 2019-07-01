import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface BatteriesProps {
    item: any
    setDialog: any
}

const Batteries: React.SFC<BatteriesProps> = ({ item, setDialog }) => {
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
