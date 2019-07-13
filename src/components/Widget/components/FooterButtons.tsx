import { IconButton } from '@material-ui/core'
import * as React from 'react'

interface FooterButtonsProps {
    footerButtons: any
}

const FooterButtons: React.SFC<FooterButtonsProps> = ({ footerButtons }) => {
    if (footerButtons) {
        return footerButtons.map((item: any) => (
            <IconButton onClick={item.action()}>{item.component}</IconButton>
        ))
    }
    return null
}

export default FooterButtons
