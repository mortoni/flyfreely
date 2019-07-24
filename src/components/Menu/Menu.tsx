import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import demo = require('assets/demo.png')
import Divider from 'components/Divider'
import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import MenuOptions from './components/MenuOptions'
import Profile from './components/Profile'

export interface MenuProps {
    menu: any
    setMenu: any
    theme: any
}

const MenuContainer = styled.div`
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

const Menu: React.SFC<MenuProps> = ({ ...props }) => {
    return (
        <MenuContainer>
            <Paper>
                <Profile />

                <OrganisationLogo>
                    <Logo alt='Organisation' src={String(demo)} />
                </OrganisationLogo>

                <Divider />

                <MenuOptions {...props} />

                <Divider />
            </Paper>
        </MenuContainer>
    )
}

export default withTheme(Menu)
