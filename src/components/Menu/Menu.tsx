import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from 'components/Divider'
import * as React from 'react'

interface MenuListInterface {
    menuList: any
    children: any
}

export interface MenuItemInterface {
    handleClick: (menu: string) => void
    icon: any
    props: any
    text: string
    id: string
}

const MenuList: React.SFC<MenuListInterface> = ({ menuList, children }) => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleMenuClick = (item: MenuItemInterface) => {
        handleClose()
        item.handleClick(item.id)
    }

    const childrenWrapper = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            'aria-controls': 'simple-menu',
            'aria-haspopup': 'true',
            "onClick": handleClick,
        })
    })

    return (
        <>
            {childrenWrapper}
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Divider />
                {menuList.map((item: any) => (
                    <MenuItem
                        key={item.text}
                        onClick={() => handleMenuClick(item)}
                    >
                        <ListItemIcon>
                            {React.createElement(item.icon, {})}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </MenuItem>
                ))}
                <Divider />
            </Menu>
        </>
    )
}

export default MenuList
