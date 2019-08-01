import Hidden from '@material-ui/core/Hidden'
import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import Desktop from './components/Desktop'
import Mobile from './components/Mobile'

export interface MenuProps {
    menu: any
    setMenu: any
    theme: any
    setDialog: any
}

const Menu: React.SFC<MenuProps> = ({ ...props }) => {
    return (
        <>
            <Hidden only={['xs', 'sm']}>
                <Desktop {...props} />
            </Hidden>

            <Hidden only={['md', 'lg', 'xl']}>
                <Mobile {...props} />
            </Hidden>
        </>
    )
}

export default withTheme(Menu)
