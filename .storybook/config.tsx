import NoSsr from '@material-ui/core/NoSsr'
import {
    createMuiTheme,
    MuiThemeProvider,
    withTheme as muiWithTheme,
} from '@material-ui/core/styles'
import { select, withKnobs } from '@storybook/addon-knobs/react'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'
import * as React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { ThemeProvider } from 'styled-components'
import themes from '../src/theme'

addDecorator((story) => {
    const theme = select('Theme', Object.keys(themes), 'base', 'Theme')

    return (
        <MuiThemeProvider theme={createMuiTheme(themes[theme])}>
            <ThemeProvider theme={createMuiTheme(themes[theme])}>
                {story()}
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
