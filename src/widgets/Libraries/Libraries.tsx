import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface LibrariesProps {
    item: any
}

const Libraries: React.SFC<LibrariesProps> = ({ item }) => {
    const headerButtons = [
        {
            action: () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'Libraries'} headerButtons={headerButtons} item={item}>
            Libraries content
        </Widget>
    )
}
export default Libraries
