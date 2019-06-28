import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface BatterySetsProps {
    item: any
}

const BatterySets: React.SFC<BatterySetsProps> = ({ item }) => {
    const headerButtons = [
        {
            action: () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'BatterySets'} headerButtons={headerButtons} item={item}>
            Battery Sets content
        </Widget>
    )
}
export default BatterySets
