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

// const Divider = styled.div`
//     margin: 10px 0px;
//     overflow: hidden;
//     height: 5px;
//     &:after {
//         content: '';
//         display: block;
//         margin: -25px auto 0;
//         width: 100%;
//         height: 25px;
//         border-radius: 125px / 12px;
//         box-shadow: ${(props) => `0 0 8px ${props.theme.palette.primary.main}`};
//     }
// `

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
