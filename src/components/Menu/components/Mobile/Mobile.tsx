import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import FingerPrintIcon from '@material-ui/icons/Fingerprint'
import PersonIcon from '@material-ui/icons/Person'
import WidgetsIcon from '@material-ui/icons/Widgets'
import demo = require('assets/demo.png')
import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import MenuSelector from '../MenuSelector'
import MobileWidgets from './MobileWidgets'

export interface MobileProps {
    menu: any
    setMenu: any
    theme: any
    setDialog: any
}

const FlyBox = styled(Box)`
    position: fixed;
    height: 55px;
    background-color: ${(props) => props.theme.palette.primary.main};
    display: inline-flex;
    width: 100%;
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

const Mobile: React.SFC<MobileProps> = ({ setDialog, ...props }) => {
    const handleOpenDialog = () => {
        setDialog({
            actions: null,
            children: <MobileWidgets {...props} />,
            fullScreen: true,
            fullWidth: true,
            maxWidth: 'lg',
            open: true,
            title: 'Widgets',
        })
    }

    const menuSelector = [
        {
            handleClick: handleOpenDialog,
            icon: WidgetsIcon,
            props: {},
            text: 'Widgets',
        },
        {
            handleClick: () => {},
            icon: PersonIcon,
            props: {},
            text: 'Profile',
        },
        {
            handleClick: () => {},
            icon: FingerPrintIcon,
            props: {},
            text: 'Organisation Admin',
        },
        {
            handleClick: () => {},
            icon: ExitToAppIcon,
            props: {},
            text: 'Logout',
        },
    ]
    return (
        <FlyBox component='div'>
            <IconContainer>
                <MenuSelector
                    menuSelector={menuSelector}
                    setDialog={setDialog}
                    {...props}
                />
            </IconContainer>
            <NameContainer>
                <Typography color='secondary'>Own ReOC Admin</Typography>
            </NameContainer>
            <AvatarContainer>
                <Avatar alt='Organisation' src={String(demo)} />
            </AvatarContainer>
        </FlyBox>
    )
}

export default withTheme(Mobile)
