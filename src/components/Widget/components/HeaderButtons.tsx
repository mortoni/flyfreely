import { IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import * as React from 'react'

export interface HeaderButtonsProps {
    headerButtons?: any[]
    classes: any
}

const styles = {
    button: {
        color: '#fafafa !important',
    },
}

const HeaderButtons: React.SFC<HeaderButtonsProps> = ({ classes, headerButtons }) => {
    if (headerButtons) {
        return headerButtons && headerButtons.map((item: any) => (
            <IconButton aria-label='Settings' classes={{ root: classes.button }} onClick={item.action()}>
                {item.component}
            </IconButton>
        ))
    }
    return null
}

export default withStyles(styles)(HeaderButtons)
