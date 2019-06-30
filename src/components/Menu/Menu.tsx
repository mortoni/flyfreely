import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import demo = require('assets/demo.png')
import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import MenuOptions from './components/MenuOptions'
import OrganisationSelect from './components/OrganisationSelect'

export interface MenuProps {
    menu: any
    setMenu: any
    theme: any
}

const MenuContainer = styled.div`
    height: 100%;
    position: fixed;
    width: 230px;
`

const Divider = styled.div`
    margin: 10px 0px;
    overflow: hidden;
    height: 5px;
    &:after {
        content: '';
        display: block;
        margin: -25px auto 0;
        width: 100%;
        height: 25px;
        border-radius: 125px / 12px;
        box-shadow: ${(props) => `0 0 8px ${props.theme.palette.primary.main}`};
    }
`

const Logo = styled.img.attrs({
    src: String(demo),
})`
    width: 100px;
`

const LogoContainer = styled(Paper)`
    flex-direction: column
    height: 180px
    align-items: center
    justify-content: center
    display: flex;
`

const Menu: React.SFC<MenuProps> = ({ ...props }) => {
    return (
        <MenuContainer>
            <LogoContainer>
                <Logo />
                <OrganisationSelect />
            </LogoContainer>

            <Divider {...props} />

            <Paper>
                <MenuOptions {...props} />
            </Paper>

            <Divider />
        </MenuContainer>
    )
}

export default withStyles(null, { withTheme: true })(Menu)
// export default withTheme(Menu)
