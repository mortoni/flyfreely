import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface RiskRegisterProps {}

const RiskRegister: React.SFC<RiskRegisterProps> = ({}) => {
    const headerButtons = [
        {
            action: () => () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'RiskRegister'} headerButtons={headerButtons}>
            Risk Register content
        </Widget>
    )
}
export default RiskRegister
