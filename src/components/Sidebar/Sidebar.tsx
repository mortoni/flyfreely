import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'
import Hidden from '@material-ui/core/Hidden'
import Paper from '@material-ui/core/Paper'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import FaceIcon from '@material-ui/icons/Face'
import FingerPrintIcon from '@material-ui/icons/Fingerprint'
import PersonIcon from '@material-ui/icons/Person'
import demo = require('assets/demo.png')
import Divider from 'components/Divider'
import Menu, { MenuItemInterface } from 'components/Menu'
import Profile from 'components/Profile'
import WidgetList from 'components/WidgetList'
import { DialogContext } from 'context/DialogContext'
import * as React from 'react'
import styled from 'styled-components'

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
const ChipWrapper = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
`

const Sidebar: React.SFC = () => {
    const { dispatch } = React.useContext(DialogContext)

    const handleClick = (menu: string) => {
        switch (menu) {
            case 'profile':
                dispatch({
                    payload: {
                        children: <Profile />,
                        maxWidth: 'lg',
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
        <Hidden smDown>
            <FlyBox component='div' mt={1} ml={1}>
                <Paper>
                    <Menu menuList={menuList}>
                        <ChipWrapper>
                            <Chip
                                icon={<FaceIcon />}
                                label='Own ReOC Admin'
                                variant='outlined'
                                color='primary'
                            />
                        </ChipWrapper>
                    </Menu>

                    <OrganisationLogo>
                        <Logo alt='Organisation' src={String(demo)} />
                    </OrganisationLogo>

                    <Divider />
                    <WidgetList />
                    <Divider />
                </Paper>
            </FlyBox>
        </Hidden>
    )
}

export default Sidebar
