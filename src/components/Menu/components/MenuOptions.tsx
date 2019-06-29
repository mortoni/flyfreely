import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { withStyles } from '@material-ui/styles'
import * as React from 'react'

export interface MenuOptionsProps {
    classes: any
    menu: any
    setMenu: any
}

const styles = (theme: any) => ({
    checkbox: {
        position: 'absolute',
        right: 0,
    },
    label: {
        justifyContent: 'flex-end',
        width: '100%',
    },
})

const MenuOptions: React.SFC<MenuOptionsProps> = ({
    classes,
    menu,
    setMenu,
}) => {
    const menuChange = (item: any, index: number) => {
        menu[index] = { ...item, selected: !item.selected }
        setMenu([...menu])
    }

    return (
        <MenuList>
            {menu.map((item: any, index: number) => (
                <MenuItem key={item.label}>
                    {React.createElement(item.icon, { key: item.key })}
                    <FormControlLabel
                        className={classes.label}
                        value={item.key}
                        control={
                            <Checkbox
                                color='primary'
                                checked={item.selected}
                                className={classes.checkbox}
                                onChange={() => menuChange(item, index)}
                            />
                        }
                        label={item.label}
                        labelPlacement='start'
                    />
                </MenuItem>
            ))}
        </MenuList>
    )
}
export default withStyles(styles)(MenuOptions)
