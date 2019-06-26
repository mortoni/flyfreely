import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import DraftsIcon from '@material-ui/icons/Drafts'
import { withStyles } from '@material-ui/styles'
import * as React from 'react'

export interface MenuOptionsProps {
    classes: any
    menu: any
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

const MenuOptions: React.SFC<MenuOptionsProps> = ({ classes, menu }) => {
    return (
        <MenuList>
            {menu.map((item: any) => (
                <MenuItem key={item.label}>
                    <DraftsIcon />
                    <FormControlLabel
                        className={classes.label}
                        value='start'
                        control={
                            <Checkbox
                                color='primary'
                                className={classes.checkbox}
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
