import Hidden from '@material-ui/core/Hidden'
import * as React from 'react'
import Desktop from './components/Desktop'
import Mobile from './components/Mobile'

export interface MenuProps {
    setDialog: any
}

const Menu: React.SFC<MenuProps> = ({ setDialog }) => (
    <>
        <Hidden only={['xs', 'sm']}>
            <Desktop setDialog={setDialog} />
        </Hidden>

        <Hidden only={['md', 'lg', 'xl']}>
            <Mobile setDialog={setDialog} />
        </Hidden>
    </>
)

export default Menu
