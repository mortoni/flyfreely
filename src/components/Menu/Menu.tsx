import Hidden from '@material-ui/core/Hidden'
import * as React from 'react'
import Desktop from './components/Desktop'
import Mobile from './components/Mobile'

const Menu: React.SFC = () => (
    <>
        <Hidden only={['xs', 'sm']}>
            <Desktop />
        </Hidden>

        <Hidden only={['md', 'lg', 'xl']}>
            <Mobile />
        </Hidden>
    </>
)

export default Menu
