import Button from '@material-ui/core/Button'
import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Dialog from './Dialog'

storiesOf('Components/Dialog', module).add('normal', () => {
    const options = {
        lg: 'lg',
        md: 'md',
        sm: 'sm',
        xl: 'xl',
        xs: 'xs',
    }
    const defaultValue = 'md'

    const title = text('Dialog title', 'Mission', 'General', 'General')
    const actions = (
        <Button onClick={() => {}} color='primary'>
            Close
        </Button>
    )
    const fullWidth = boolean('FullWidth', true, 'General')
    const open = boolean('open', true, 'General')
    const maxWidth = select('Max Width', options, defaultValue, 'General')
    const fullScreen = boolean('Full screnn', false, 'General')

    return (
        <Dialog
            title={title}
            actions={actions}
            fullWidth={fullWidth}
            open={open}
            maxWidth={maxWidth}
            fullScreen={fullScreen}
        />
    )
})
