import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface OrganisationLinksProps {}

const OrganisationLinks: React.SFC<OrganisationLinksProps> = ({}) => {
    const headerButtons = [
        {
            action: () => () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget title={'OrganisationLinks'} headerButtons={headerButtons}>
            Organisation Links content
        </Widget>
    )
}
export default OrganisationLinks
