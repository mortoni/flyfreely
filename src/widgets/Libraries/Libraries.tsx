import * as React from 'react'
import Widget from '../../components/Widget/index'
import AddIcon from '@material-ui/icons/AddCircleOutline'

export interface ILibrariesProps {

}

const Libraries: React.SFC<ILibrariesProps> = ({ }) => {
    const headerButtons = [
        { component: <AddIcon />, action: () => { } },
    ]

    return (
        <Widget title={'Libraries'} headerButtons={headerButtons}>

        </Widget>
    );
}
export default Libraries;
