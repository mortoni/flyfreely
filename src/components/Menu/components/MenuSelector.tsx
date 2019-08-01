import IconButton from '@material-ui/core/IconButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import Divider from 'components/Divider'
import * as React from 'react'

interface MenuSelectorProps {
    setDialog: any
    menuSelector: any
    children?: any
}

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
        paddingBottom: '0px',
        paddingTop: '0px',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            horizontal: 'center',
            vertical: 'bottom',
        }}
        transformOrigin={{
            horizontal: 'center',
            vertical: 'top',
        }}
        {...props}
    />
))

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem)

const MenuSelector: React.SFC<MenuSelectorProps> = ({
    setDialog,
    menuSelector,
    children,
    ...props
}) => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    function handleClick(event: any) {
        setAnchorEl(event.currentTarget)
    }

    function handleClose() {
        setAnchorEl(null)
    }

    const handleMenuClick = (menuClick: any) => {
        handleClose()
        menuClick()
    }

    return (
        <>
            {children ? (
                children
            ) : (
                <IconButton
                    aria-controls='customized-menu'
                    aria-haspopup='true'
                    variant='contained'
                    color='primary'
                    onClick={handleClick}
                >
                    <MenuIcon color='secondary' fontSize='large' />
                </IconButton>
            )}
            <StyledMenu
                id='customized-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Divider />
                {menuSelector.map((item: any) => (
                    <StyledMenuItem
                        key={item.text}
                        onClick={() => handleMenuClick(item.handleClick)}
                    >
                        <ListItemIcon>
                            {React.createElement(item.icon, {})}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </StyledMenuItem>
                ))}
                <Divider />
            </StyledMenu>
        </>
    )
}

export default MenuSelector
