import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import FingerPrintIcon from '@material-ui/icons/Fingerprint'
import MenuIcon from '@material-ui/icons/Menu'
import PersonIcon from '@material-ui/icons/Person'
import WidgetsIcon from '@material-ui/icons/Widgets'
import demo = require('assets/demo.png')
import Menu, { MenuItemInterface } from 'components/Menu'
import Profile from 'components/Profile'
import WidgetList from 'components/WidgetList'
import { DialogContext } from 'context/DialogContext'
import * as React from 'react'
import styled, { withTheme } from 'styled-components'
export interface HeaderProps {
    theme: any
}

const FlyBox = styled(Box)`
    position: fixed;
    height: 55px;
    background-color: ${(props) => props.theme.palette.primary.main};
    display: inline-flex;
    width: 100%;
    z-index: 11;
`
const IconContainer = styled.div`
    flex: 0.3;
    justify-content: center;
    align-items: center;
    display: flex;
`

const NameContainer = styled.div`
    flex: 0.6;
    justify-content: center;
    align-items: center;
    display: flex;
`

const AvatarContainer = styled.div`
    flex: 0.3;
    justify-content: center;
    align-items: center;
    display: flex;
`

const Header: React.SFC<HeaderProps> = () => {
    const { dispatch } = React.useContext(DialogContext)

    const handleClick = (menu: string) => {
        switch (menu) {
            case 'widgets':
                dispatch({
                    payload: {
                        children: <WidgetList />,
                        fullScreen: true,
                        title: 'Widgets',
                    },
                    type: 'open',
                })
                break
            case 'profile':
                dispatch({
                    payload: {
                        children: <Profile />,
                        fullScreen: true,
                        title: 'Profile',
                    },
                    type: 'open',
                })
                break
            case 'admin':
            case 'logout':
        }
    }

    const menuList: MenuItemInterface[] = [
        {
            handleClick,
            icon: WidgetsIcon,
            id: 'widgets',
            props: {},
            text: 'Widgets',
        },
        {
            handleClick,
            icon: PersonIcon,
            id: 'profile',
            props: {},
            text: 'Profile',
        },
        {
            handleClick,
            icon: FingerPrintIcon,
            id: 'admin',
            props: {},
            text: 'Organisation Admin',
        },
        {
            handleClick,
            icon: ExitToAppIcon,
            id: 'logout',
            props: {},
            text: 'Logout',
        },
    ]
    return (
        <Hidden mdUp>
            <FlyBox component='div'>
                <IconContainer>
                    <Menu menuList={menuList}>
                        <IconButton color='secondary'>
                            <MenuIcon />
                        </IconButton>
                    </Menu>
                </IconContainer>
                <NameContainer>
                    <Typography color='secondary'>Own ReOC Admin</Typography>
                </NameContainer>
                <AvatarContainer>
                    <Avatar alt='Organisation' src={String(demo)} />
                </AvatarContainer>
            </FlyBox>
        </Hidden>
    )
}

export default withTheme(Header)
