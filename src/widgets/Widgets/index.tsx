import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import { WidgetContex } from 'context/WidgetContext'
import * as React from 'react'
import styled from 'styled-components'

interface WidgetsProps {
    width: any
}

const FlyBox = styled(Box)`
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: hidden;
`

const Widgets: React.SFC<any & WidgetsProps> = ({ width }) => {
    const { widgets } = React.useContext(WidgetContex)

    const loadWidgets = widgets.map((item: any) =>
        React.createElement(item.component, {
            item,
            key: item.key,
        }),
    )

    const isMediumUp = isWidthUp('sm', width)

    return (
        <FlyBox ml={isMediumUp ? 30 : 0} pt={isMediumUp ? 0 : 5}>
            <Grid container spacing={0}>
                {loadWidgets}
            </Grid>
        </FlyBox>
    )
}
export default withWidth()(Widgets)
