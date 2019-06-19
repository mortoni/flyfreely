import * as React from 'react'
import Widget from '../../components/Widget/index'
import AddIcon from '@material-ui/icons/AddCircleOutline'

export interface IRiskRegisterProps {

}

const RiskRegister: React.SFC<IRiskRegisterProps> = ({ }) => {
    const headerButtons = [
        { component: <AddIcon />, action: () => { } },
    ]

    return (
        <Widget title={'RiskRegister'} headerButtons={headerButtons}>

        </Widget>
    );
}
export default RiskRegister;
