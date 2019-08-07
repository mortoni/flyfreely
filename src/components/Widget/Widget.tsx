import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import {
    AnimateWidget,
    FooterButtons,
    WidgetHeader,
    WidgetIcon,
} from './components'

export interface WidgetProps {
    headerButtons?: any
    children?: any
    title: string
    subheader?: string
    classes?: any
    titleWithSelect?: boolean
    item: any
    theme?: any
}

const WidgetContainer = styled.div`
    position: relative;
`

const WidgetContent = styled(CardContent)`
    background-color: ${(props) => props.theme.palette.grey[100]};
`

const WidgetCard = styled(Card)`
    margin-top: 25px;
`

const FlyCardActions = styled(CardActions)`
    background-color: ${(props) => props.theme.palette.grey[100]};
`

const FlyCardHeader = styled(CardHeader)`
    && {
        background-color: ${(props) => props.theme.palette.primary.main};
        max-height: 65px;
        padding-left: 85px;
        color: ${(props) => props.theme.palette.grey[100]};
    }
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
        return title
    }

    return (
        <Grid item xs={12} {...item.size} key={item.key}>
            <AnimateWidget duration={400} animate={item.selected}>
                <Box component='div' p={1}>
                    <WidgetContainer>
                        <WidgetIcon />
                        <WidgetCard raised={true}>
                            <FlyCardHeader
                                action={<WidgetHeader {...props} />}
                                title={getTitle()}
                                subheader={subheader}
                            />
                            <WidgetContent>{children}</WidgetContent>
                            <FlyCardActions disableSpacing={true}>
                                <FooterButtons {...props} />
                            </FlyCardActions>
                        </WidgetCard>
                    </WidgetContainer>
                </Box>
            </AnimateWidget>
        </Grid>
    )
}

export default withTheme(Widget)
