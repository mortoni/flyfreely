import * as React from 'src/widgets/Mission.12/node_modules/react'
import Widget from '../../components/Widget/index'
import AddIcon from 'src/widgets/Mission.12/node_modules/@material-ui/icons/AddCircleOutline'

export interface IMaintenanceProps {

}

const Maintenance: React.SFC<IMaintenanceProps> = ({ }) => {
    const headerButtons = [
        { component: <AddIcon />, action: () => { } },
    ]

    return (
        <Widget title={'Maintenance'} headerButtons={headerButtons}>

        </Widget>
    );
}
export default Maintenance;
