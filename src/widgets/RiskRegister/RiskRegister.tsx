import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface RiskRegisterProps {
    item: any
}

const RiskRegister: React.SFC<RiskRegisterProps> = ({ item }) => {
    const headerButtons = [
        {
            action: () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget
            title={'RiskRegister'}
            headerButtons={headerButtons}
            item={item}
        >
            Risk Register content
        </Widget>
    )
}
export default RiskRegister
