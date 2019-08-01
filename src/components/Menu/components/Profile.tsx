import Chip from '@material-ui/core/Chip'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import FaceIcon from '@material-ui/icons/Face'
import FingerPrintIcon from '@material-ui/icons/Fingerprint'
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import PersonIcon from '@material-ui/icons/Person'
import WidgetsIcon from '@material-ui/icons/Widgets'
import Divider from 'components/Divider'
import * as React from 'react'
import styled from 'styled-components'
import MenuSelector from './MenuSelector'

export interface ProfileProps {}

const Wrapper = styled.div`
    && {
        padding: 0.6rem;
    }
`

const FlyChips = styled(Chip)`
    && {
        width: 100%;
        justify-content: end;
    }
`

const WrapperChips = styled.div`
    && {
    }
`

const ArrowDown = styled(ArrowDownIcon)`
    && {
        position: absolute;
        right: 1rem;
        top: 0.9rem;
    }
`

const Profile: React.SFC<ProfileProps> = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    const menuSelector = [
        {
            handleClick: () => {},
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
        <Wrapper>
            {/* TODO: find out a way to solve this */}
            {/* <MenuSelector menuSelector={menuSelector} setDialog={() => {}} /> */}
            <WrapperChips>
                <FlyChips
                    aria-controls='simple-menu'
                    aria-haspopup='true'
                    icon={<FaceIcon />}
                    label='Own ReOC Admin'
                    onClick={handleClick}
                    variant='outlined'
                    color='primary'
                />
            </WrapperChips>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Divider margin='0' />
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Orgnisation Admin</MenuItem>
                <MenuItem onClick={handleClose}>Start Tour</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <Divider margin='0' />
            </Menu>
        </Wrapper>
    )
}
export default Profile
