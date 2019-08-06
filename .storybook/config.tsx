import DateFnsUtils from '@date-io/date-fns'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { select, withKnobs } from '@storybook/addon-knobs/react'
import { addDecorator, configure } from '@storybook/react'
import * as React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { ThemeProvider as StyledProvider } from 'styled-components'
import Context from '../src/context'
import themes from '../src/theme'

addDecorator((story) => {
    const theme = select('Theme', Object.keys(themes), 'flyfreely', 'Theme')

    return (
        <ThemeProvider theme={createMuiTheme(themes[theme])}>
            <CssBaseline />
            <StyledProvider theme={createMuiTheme(themes[theme])}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Context>{story()}</Context>
                </MuiPickersUtilsProvider>
            </StyledProvider>
        </ThemeProvider>
    )
})
addDecorator(withKnobs)
addDecorator(jsxDecorator)

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/)

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
// prettier-ignore-end
