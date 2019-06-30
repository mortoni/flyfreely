import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import * as React from 'react'
import styled from 'styled-components'
import {
    AnimateWidget,
    FooterButtons,
    HeaderWithSelect,
    WidgetHeader,
    WidgetIcon,
} from './components'

export interface WidgetProps {
    children?: any
    title: string
    subheader?: string
    classes: any
    titleWithSelect: boolean
    item: any
}

const styles = (theme: any) => ({
    cardActions: {
        backgroundColor: '#fafafa',
    },
    header: {
        backgroundColor: theme.palette.primary.main,
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

const WidgetContainer = styled.div`
    position: relative;
`

const WidgetContent = styled(CardContent)`
    background-color: #fafafa;
`

const WidgetCard = styled(Card).attrs({
    raised: true,
})`
    margin-top: 25px;
`

const WidgetActions = styled(CardActions).attrs({
    disableSpacing: true,
})`
    margin-top: 25px;
`

const Widget: React.SFC<WidgetProps> = ({
    classes,
    title,
    subheader,
    children,
    titleWithSelect,
    item,
    ...props
}) => {
    const getTitle = () => {
        if (titleWithSelect) {
            return <HeaderWithSelect />
        }
        return title
    }

    return (
        <Grid item xs={12} {...item.size} key={item.key}>
            <AnimateWidget duration={400} animate={item.selected}>
                <Box component='div' p={1}>
                    <WidgetContainer>
                        <WidgetIcon />
                        <WidgetCard>
                            <CardHeader
                                action={<WidgetHeader {...props} />}
                                classes={{ ...classes, root: classes.header }}
                                title={getTitle()}
                                subheader={subheader}
                            />
                            <WidgetContent>{children}</WidgetContent>
                            <CardActions
                                disableSpacing={true}
                                classes={{ root: classes.cardActions }}
                            >
                                <FooterButtons {...props} />
                            </CardActions>
                        </WidgetCard>
                    </WidgetContainer>
                </Box>
            </AnimateWidget>
        </Grid>
    )
}

export default withStyles(styles)(Widget)
// TODO:
// CardHeader to WdigetHeader
// CardActions to WdigetActions
// FooterButtons to WidgetFooter
