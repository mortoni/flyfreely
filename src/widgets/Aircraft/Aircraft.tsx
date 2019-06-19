import * as React from 'react'
import Widget from '../../components/Widget/index'
import AddIcon from '@material-ui/icons/AddCircleOutline'

export interface IAircraftProps {

}

const Aircraft: React.SFC<IAircraftProps> = ({ }) => {
    const headerButtons = [
        { component: <AddIcon />, action: () => { } },
    ]

    return (
        <Widget title={'Aircraft'} headerButtons={headerButtons}>

        </Widget>
    );
}
export default Aircraft;
