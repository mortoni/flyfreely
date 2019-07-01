import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import * as React from 'react'
import styled from 'styled-components'

export interface MenuOptionsProps {
    menu: any
    setMenu: any
}

const FlyCheckbox = styled(Checkbox).attrs(({ checked, onChange }) => ({
    checked,
    color: 'primary',
    onChange,
}))`
    && {
        position: absolute;
        right: 0;
    }
`

const FlyLabel = styled(FormControlLabel).attrs(
    ({ value, control, label, labelPlacement }) => ({
        control,
        label,
        labelPlacement,
        value,
    }),
)`
    && {
        justify-content: flex-end;
        width: 100%;
    }
`

const MenuOptions: React.SFC<MenuOptionsProps> = ({ menu, setMenu }) => {
    const menuChange = (item: any, index: number) => {
        menu[index] = { ...item, selected: !item.selected }
        setMenu([...menu])
    }

    return (
        <MenuList>
            {menu.map((item: any, index: number) => (
                <MenuItem key={item.label}>
                    {React.createElement(item.icon, { key: item.key })}
                    <FlyLabel
                        value={item.key}
                        control={
                            <FlyCheckbox
                                checked={item.selected}
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
export default MenuOptions
