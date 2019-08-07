import Grid from '@material-ui/core/Grid'
import Dialog from 'components/Dialog'
import Menu from 'components/Menu'
import * as React from 'react'
import styled from 'styled-components'
import Widgets from 'widgets/Widgets'

const Container = styled(Grid)`
    overflow-x: hidden;
    overflow-y: hidden;
`

const Dashboard: React.SFC = () => {
    return (
        <Container container>
            <Menu />
            <Widgets />
            <Dialog />
        </Container>
    )
}
export default Dashboard
