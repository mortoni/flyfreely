import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import Dialog, { FlyDialogProps } from 'components/Dialog'
import Menu from 'components/Menu'
import {
    defaultWidgets,
    WidgetContext,
    WidgetInterface,
} from 'context/WidgetContext'
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
    const defaultDialog: FlyDialogProps = {
        actions: null,
        children: null,
        fullScreen: false,
        fullWidth: true,
        maxWidth: 'md',
        open: false,
        title: '',
    }
    const [dialogProps, setDialog] = React.useState(defaultDialog)

    const [widgets, setWidget] = React.useState(defaultWidgets)

    const loadWidgets = widgets.map((item) =>
        React.createElement(item.component, {
            item,
            key: item.key,
            setDialog,
        }),
    )

    const isMediumUp = isWidthUp('sm', width)

    const handleWidget = (widget: WidgetInterface, index: number) => {
        widgets[index] = { ...widget, selected: !widget.selected }
        setWidget([...widgets])
    }

    return (
        <WidgetContext.Provider value={{ widgets, handleWidget }}>
            <Container container>
                <Menu setDialog={setDialog} />

                <FlyBox ml={isMediumUp ? 30 : 0} pt={isMediumUp ? 0 : 5}>
                    <Grid container spacing={0}>
                        {loadWidgets}
                    </Grid>
                </FlyBox>

                <Dialog
                    {...dialogProps}
                    handleClose={() =>
                        setDialog({
                            ...defaultDialog,
                            open: false,
                        })
                    }
                />
            </Container>
        </WidgetContext.Provider>
    )
}
export default withWidth()(Dashboard)
