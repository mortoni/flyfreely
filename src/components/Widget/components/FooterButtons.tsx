import { IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import * as React from 'react'

interface FooterButtonsProps {
    footerButtons?: any[]
    classes: any
}

const styles = {}

const FooterButtons: React.SFC<FooterButtonsProps> = ({
    classes,
    footerButtons,
}) => {
    if (footerButtons) {
        return footerButtons.map((item: any) => (
            <IconButton onClick={item.action()}>{item.component}</IconButton>
        ))
    }
    return null
}

export default withStyles(styles)(FooterButtons)
