import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface LibrariesProps {}

const Libraries: React.SFC<LibrariesProps> = ({}) => {
    const headerButtons = [
        {
            action: () => () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'Libraries'} headerButtons={headerButtons}>
            Libraries content
        </Widget>
    )
}
export default Libraries
