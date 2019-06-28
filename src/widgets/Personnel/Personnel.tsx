import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface PersonnelProps {
    item: any
}

const Personnel: React.SFC<PersonnelProps> = ({ item }) => {
    const headerButtons = [
        {
            action: () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'Personnel'} headerButtons={headerButtons} item={item}>
            Personnel content
        </Widget>
    )
}
export default Personnel
