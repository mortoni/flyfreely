import Chip from '@material-ui/core/Chip'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import FaceIcon from '@material-ui/icons/Face'
import Divider from 'components/Divider'
import * as React from 'react'
import styled from 'styled-components'

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

const Profile: React.SFC = () => {
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
