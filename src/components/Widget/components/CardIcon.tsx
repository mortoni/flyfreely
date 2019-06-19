import { withStyles } from '@material-ui/styles'
import * as React from 'react'

interface ICardIconProps {
    classes: any
}

const styles = {
    icon: {
        borderBottom: '80px solid #fafafa',
        borderRight: '30px solid transparent',
        borderTopLeftRadius: '5px',
        position: 'absolute',
        top: '-12px',
        width: '55px',
    },
}

const CardIcon: React.SFC<ICardIconProps> = ({ classes }) => {
    return <div className={classes.icon} />
}

export default withStyles(styles)(CardIcon)
