import Hidden from '@material-ui/core/Hidden'
import * as React from 'react'
import Desktop from './components/Desktop'
import Mobile from './components/Mobile'

const Menu: React.SFC = () => (
    <>
        <Hidden smDown>
            <Desktop />
        </Hidden>

        <Hidden mdUp>
            <Mobile />
        </Hidden>
    </>
)

export default Menu
