import DateFnsUtils from '@date-io/date-fns'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
    createMuiTheme,
    MuiThemeProvider,
    withTheme as muiWithTheme,
} from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { select, withKnobs } from '@storybook/addon-knobs/react'
import { addDecorator, addParameters, configure } from '@storybook/react'
import * as React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { ThemeProvider as StyledProvider } from 'styled-components'
// TODO: wrap up all the context in one
import { DialogContextProvider } from '../src/context/DialogContex'
import { WidgetContextProvider } from '../src/context/WidgetContext'
import themes from '../src/theme'

addDecorator((story) => {
    const theme = select('Theme', Object.keys(themes), 'flyfreely', 'Theme')

    // using MuiThemeProvider from v3
    // ThemeProvider from v4
    // Styled component Provider
    return (
        <MuiThemeProvider theme={createMuiTheme(themes[theme])}>
            <ThemeProvider theme={createMuiTheme(themes[theme])}>
                <CssBaseline />
                <StyledProvider theme={createMuiTheme(themes[theme])}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <WidgetContextProvider>
                            <DialogContextProvider>
                                {story()}
                            </DialogContextProvider>
                        </WidgetContextProvider>
                    </MuiPickersUtilsProvider>
                </StyledProvider>
            </ThemeProvider>
        </MuiThemeProvider>
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
