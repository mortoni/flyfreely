import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface BatterySetsProps {}

const BatterySets: React.SFC<BatterySetsProps> = ({}) => {
    const headerButtons = [
        {
            action: () => () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'BatterySets'} headerButtons={headerButtons}>
            Battery Sets content
        </Widget>
    )
}
export default BatterySets
