import { IconButton } from '@material-ui/core'
import * as React from 'react'
import styled from 'styled-components'

interface WidgetHeaderProps {
    headerButtons?: any
}

const ButtonWithIcon = styled(IconButton)<any>`
    color: #fafafa !important;
`

const WidgetHeader: React.SFC<WidgetHeaderProps> = ({ headerButtons }) => {
    if (headerButtons) {
        return headerButtons.map((item: any) => (
            <ButtonWithIcon
                key={item.key}
                item={item}
                aria-label='Settings'
                onClick={item.action}
            >
                {item.component}
            </ButtonWithIcon>
        ))
    }
    return null
}

export default WidgetHeader
