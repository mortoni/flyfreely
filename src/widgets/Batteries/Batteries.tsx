import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface BatteriesProps {}

const Batteries: React.SFC<BatteriesProps> = ({}) => {
    const headerButtons = [
        {
            action: () => () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'Batteries'} headerButtons={headerButtons}>
            Batteries content
        </Widget>
    )
}
export default Batteries
