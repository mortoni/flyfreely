import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import demo = require('assets/demo.png')
import Divider from 'components/Divider'
import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import MenuOptions from '../MenuOptions'
import Profile from '../Profile'

export interface DesktopProps {
    theme: any
}

const FlyBox = styled(Box)`
    height: 100%;
    position: fixed;
    width: 230px;
`

const Logo = styled(Avatar)`
    && {
        width: 75px;
        height: 75px;
        padding: 10px;
    }
`

const OrganisationLogo = styled.div`
    max-height: 100px;
    justify-content: center;
    padding: 5px;
    display: flex;
`

const Desktop: React.SFC<DesktopProps> = () => {
    return (
        <FlyBox component='div' mt={1} ml={1}>
            <Paper>
                <Profile />

                <OrganisationLogo>
                    <Logo alt='Organisation' src={String(demo)} />
                </OrganisationLogo>

                <Divider />

                <MenuOptions />

                <Divider />
            </Paper>
        </FlyBox>
    )
}

export default withTheme(Desktop)
