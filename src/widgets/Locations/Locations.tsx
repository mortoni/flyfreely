import * as React from 'react'
import Widget from '../../components/Widget/index'
import AddIcon from '@material-ui/icons/AddCircleOutline'

export interface ILocationsProps {

}

const Locations: React.SFC<ILocationsProps> = ({ }) => {
    const headerButtons = [
        { component: <AddIcon />, action: () => { } },
    ]

    return (
        <Widget title={'Locations'} headerButtons={headerButtons}>

        </Widget>
    );
}
export default Locations;
