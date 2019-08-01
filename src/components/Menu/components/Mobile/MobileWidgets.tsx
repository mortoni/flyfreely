import Box from '@material-ui/core/Box'
import Divider from 'components/Divider'
import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import MenuOptions from '../MenuOptions'

export interface MobileProfileProps {
    theme: any
    menu: any
    setMenu: any
}

const MobileProfile: React.SFC<MobileProfileProps> = ({ ...props }) => {
    return (
        <Box component='div'>
            <Divider />

            <MenuOptions {...props} />

            <Divider />
        </Box>
    )
}

export default withTheme(MobileProfile)
