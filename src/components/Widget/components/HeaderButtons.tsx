import { IconButton } from '@material-ui/core'
import * as React from 'react'
import styled from 'styled-components'

export interface HeaderButtonsProps {
    headerButtons?: any[]
}

const ButtonWithIcon = styled(IconButton)`
    color: #fafafa !important;
`

const HeaderButtons: React.SFC<HeaderButtonsProps> = ({ headerButtons }) => {
    if (headerButtons) {
        return headerButtons.map((item: any) => (
            <ButtonWithIcon
                key={item.key}
                item={item}
                aria-label='Settings'
                onClick={item.action()}
            >
                {item.component}
            </ButtonWithIcon>
        ))
    }
    return null
}

export default HeaderButtons
