import Box from '@material-ui/core/Box'
import Divider from 'components/Divider'
import * as React from 'react'
import { withTheme } from 'styled-components'
import MenuOptions from '../MenuOptions'

export interface MobileProfileProps {
    theme: any
}

const MobileProfile: React.SFC<MobileProfileProps> = ({ theme }) => (
    <Box component='div'>
        <Divider />

        <MenuOptions />

        <Divider />
    </Box>
)

export default withTheme(MobileProfile)
