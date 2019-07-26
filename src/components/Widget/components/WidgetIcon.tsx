import { withStyles } from '@material-ui/styles'
import * as React from 'react'

interface WidgetIconProps {
    classes: any
}

const styles = {
    icon: {
        borderBottom: '80px solid #fafafa',
        borderRight: '30px solid transparent',
        borderTopLeftRadius: '5px',
        position: 'absolute',
        top: '-12px',
        width: '85px',
    },
}

const WidgetIcon: React.SFC<WidgetIconProps> = ({ classes }) => (
    <div className={classes.icon} />
)

export default withStyles(styles)(WidgetIcon)
