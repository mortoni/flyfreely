import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import * as React from 'react'
import styled from 'styled-components'
import {
    CardIcon,
    FooterButtons,
    HeaderButtons,
    HeaderWithSelect,
} from './components'

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

const CardContainer = styled.div`
    position: relative;
`

const Widget: React.SFC<WidgetProps> = ({
    classes,
    title,
    subheader,
    children,
    titleWithSelect,
    ...props
}) => {
    const getTitle = () => {
        if (titleWithSelect) {
            return <HeaderWithSelect />
        }
        return title
    }

    return (
        <CardContainer>
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
                <CardActions
                    disableSpacing={true}
                    classes={{ root: classes.cardActions }}
                >
                    <FooterButtons {...props} />
                </CardActions>
            </Card>
        </CardContainer>
    )
}

export default withStyles(styles)(Widget)
