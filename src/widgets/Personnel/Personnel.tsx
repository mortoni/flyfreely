import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface PersonnelProps {}

const Personnel: React.SFC<PersonnelProps> = ({}) => {
    const headerButtons = [
        {
            action: () => () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'Personnel'} headerButtons={headerButtons}>
            Personnel content
        </Widget>
    )
}
export default Personnel
