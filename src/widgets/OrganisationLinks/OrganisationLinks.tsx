import AddIcon from '@material-ui/icons/AddCircleOutline'
import Widget from 'components/Widget'
import * as React from 'react'

export interface OrganisationLinksProps {
    item: any
}

const OrganisationLinks: React.SFC<OrganisationLinksProps> = ({ item }) => {
    const headerButtons = [
        {
            action: () => {},
            component: <AddIcon />,
            key: 'addIcon',
        },
    ]

    return (
        <Widget
            title={'OrganisationLinks'}
            headerButtons={headerButtons}
            item={item}
        >
            Organisation Links content
        </Widget>
    )
}
export default OrganisationLinks
