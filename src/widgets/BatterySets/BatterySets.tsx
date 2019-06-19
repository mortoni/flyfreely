import * as React from 'react'
import Widget from '../../components/Widget/index'
import AddIcon from '@material-ui/icons/AddCircleOutline'

export interface IBatterySetsProps {

}

const BatterySets: React.SFC<IBatterySetsProps> = ({ }) => {
    const headerButtons = [
        { component: <AddIcon />, action: () => { } },
    ]

    return (
        <Widget title={'BatterySets'} headerButtons={headerButtons}>

        </Widget>
    );
}
export default BatterySets;
