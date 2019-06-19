import * as React from 'react'
import Widget from '../../components/Widget/index'
import AddIcon from '@material-ui/icons/AddCircleOutline'

export interface IBatteriesProps {

}

const Batteries: React.SFC<IBatteriesProps> = ({ }) => {
    const headerButtons = [
        { component: <AddIcon />, action: () => { } },
    ]

    return (
        <Widget title={'Batteries'} headerButtons={headerButtons}>

        </Widget>
    );
}
export default Batteries;
