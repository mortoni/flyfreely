import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import Dialog, { FlyDialogProps } from 'components/Dialog'
import Menu from 'components/Menu'
import { DialogContex } from 'context/DialogContex'
import { WidgetContex } from 'context/WidgetContext'
import * as React from 'react'
import styled from 'styled-components'

interface DashboardProps {
    width: any
}

const FlyBox = styled(Box)`
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: hidden;
`

const Container = styled(Grid)`
    overflow-x: hidden;
    overflow-y: hidden;
`

const Dashboard: React.SFC<DashboardProps> = ({ width }) => {
    const { widgets } = React.useContext(WidgetContex)
    const { dialog, dispatch } = React.useContext(DialogContex)

    const loadWidgets = widgets.map((item: any) =>
        React.createElement(item.component, {
            item,
            key: item.key,
        }),
    )

    const isMediumUp = isWidthUp('sm', width)

    return (
        <Container container>
            <Menu />

            <FlyBox ml={isMediumUp ? 30 : 0} pt={isMediumUp ? 0 : 5}>
                <Grid container spacing={0}>
                    {loadWidgets}
                </Grid>
            </FlyBox>

            <Dialog
                {...dialog}
                handleClose={() => dispatch({ type: 'close' })}
            />
        </Container>
    )
}
export default withWidth()(Dashboard)
