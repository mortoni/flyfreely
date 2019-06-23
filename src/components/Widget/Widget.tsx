import * as React from 'react'
import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { CardIcon, FooterButtons, HeaderButtons, HeaderWithSelect } from './components'

export interface WidgetProps {
    children?: any
    title: string
    subheader?: string
    classes: any
    titleWithSelect: boolean
}

const styles = (theme: any) => ({
    card: {
        marginTop: '25px',
    },
    cardActions: {
        backgroundColor: '#fafafa',
    },
    cardContent: {
        backgroundColor: '#fafafa',
    },
    header: {
        backgroundColor: '#037dd6',
        maxHeight: '35px',
        paddingLeft: '85px !important',
    },
    subheader: {
        color: '#fafafa',
    },
    title: {
        color: '#fafafa',
    },
    widgetContaier: {
        position: 'relative',
    },
})

const Widget: React.SFC<WidgetProps> = ({ classes, title, subheader, children, titleWithSelect, ...props }) => {
    const getTitle = () => {
        if (titleWithSelect) {
            return <HeaderWithSelect />
        }
        return title
    }

    return (
        <div className={classes.widgetContaier}>
            <CardIcon />
            <Card raised={true} classes={{ root: classes.card }}>
                <CardHeader
                    action={<HeaderButtons {...props} />}
                    classes={{ ...classes, root: classes.header }}
                    title={getTitle()}
                    subheader={subheader}
                />
                <CardContent classes={{ root: classes.cardContent }}>
                    {children}
                </CardContent>
                <CardActions disableSpacing={true} classes={{ root: classes.cardActions }}>
                    <FooterButtons {...props} />
                </CardActions>
            </Card>
        </div >
    )
}

export default withStyles(styles)(Widget)
