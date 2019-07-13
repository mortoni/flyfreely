import Chip from '@material-ui/core/Chip'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import FaceIcon from '@material-ui/icons/Face'
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import Divider from 'components/Divider'
import * as React from 'react'
import styled from 'styled-components'

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

    return (
        <Wrapper>
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
                <ArrowDown color='primary' />
            </WrapperChips>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <Divider margin='0' />
                <MenuItem onClick={handleClose}>Orgnisation Admin</MenuItem>
                <Divider margin='0' />
                <MenuItem onClick={handleClose}>Start Tour</MenuItem>
                <Divider margin='0' />
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </Wrapper>
    )
}
export default Profile
