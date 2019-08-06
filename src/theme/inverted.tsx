const palette = {
    grey: {
        100: '#FAFAFA',
        200: '#F5F5F5',
        800: '#424248',
        900: '#181822',
    },
    primary: {
        contrastText: '#FFF',
        dark: '#846b33',
        light: '#eaca8c',
        main: '#b6995e',
    },
    secondary: {
        contrastText: '#000000',
        dark: '#FFF',
        light: '#FFF',
        main: '#FFF',
    },
    text: {
        primary: '#464646',
        secondary: '#464646',
    },
}

export default {
    overrides: {
        MuiStepLabel: {
            active: {
                color: `${palette.primary.main} !important`,
            },
        },
        MuiStepper: {
            root: {
                backgroundColor: 'transparent',
            },
        },
    },
    palette,
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        useNextVariants: true,
    },
}
