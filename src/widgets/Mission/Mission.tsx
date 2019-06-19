import * as React from 'react'
import Widget from '../../components/Widget'
import AddIcon from '@material-ui/icons/AddCircleOutline'

export interface IMissionsProps {

}

const Missions: React.SFC<IMissionsProps> = ({ }) => {
    const headerButtons = [
        { component: <AddIcon />, action: () => { } },
    ]

    return (
        <Widget title={'Missions'} headerButtons={headerButtons}>

        </Widget>
    );
}
export default Missions;
