import DateFnsUtils from '@date-io/date-fns'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { select, withKnobs } from '@storybook/addon-knobs/react'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'
import * as React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import themes from '../src/theme'

addParameters({
    options: {
        backgrounds: [
            {
                default: true,
                name: 'grey',
                value: '#ccc',
            },
            {
                name: 'none',
                value: '#fff',
            },
            {
                name: 'black',
                value: '#000',
            },
        ],
        isFullscreen: false,
        panelPosition: 'bottom',
        theme: create({
            base: 'light',
            brandTitle: 'FlyFreely',
        }),
    },
})

addDecorator((story) => {
    const theme = select('Theme', Object.keys(themes), 'base', 'Theme')

    return (
        <MuiThemeProvider theme={createMuiTheme(themes[theme])}>
            {story()}
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
