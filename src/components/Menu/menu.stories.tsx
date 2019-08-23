import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import PersonIcon from '@material-ui/icons/Person'
import { object } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Menu from './Menu'

storiesOf('Components/Menu', module).add('default', () => {
    const menuList = object('Menu List', [
        {
            handleClick: () => {},
            icon: PersonIcon,
            id: 'test',
            props: {},
            text: 'Test',
        },
        {
            handleClick: () => {},
            icon: PersonIcon,
            id: 'another test',
            props: {},
            text: 'Test 2',
        },
    ])

    return (
        <Menu menuList={menuList}>
            <IconButton color='secondary'>
                <MenuIcon />
            </IconButton>
        </Menu>
    )
})
