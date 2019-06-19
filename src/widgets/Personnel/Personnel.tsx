import * as React from 'react'
import Widget from '../../components/Widget/index'
import AddIcon from '@material-ui/icons/AddCircleOutline'

export interface IPersonnelProps {

}

const Personnel: React.SFC<IPersonnelProps> = ({ }) => {
    const headerButtons = [
        { component: <AddIcon />, action: () => { } },
    ]

    return (
        <Widget title={'Personnel'} headerButtons={headerButtons}>

        </Widget>
    );
}
export default Personnel;
