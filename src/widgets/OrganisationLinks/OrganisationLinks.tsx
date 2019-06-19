import * as React from 'react'
import Widget from '../../components/Widget/index'
import AddIcon from '@material-ui/icons/AddCircleOutline'

export interface IOrganisationLinksProps {

}

const OrganisationLinks: React.SFC<IOrganisationLinksProps> = ({ }) => {
    const headerButtons = [
        { component: <AddIcon />, action: () => { } },
    ]

    return (
        <Widget title={'OrganisationLinks'} headerButtons={headerButtons}>

        </Widget>
    );
}
export default OrganisationLinks;
