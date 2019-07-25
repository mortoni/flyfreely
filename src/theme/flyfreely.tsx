export default {
    overrides: {
        MuiStepper: {
            root: {
                backgroundColor: 'transparent',
            },
        },
    },
    palette: {
        grey: {
            100: '#FAFAFA',
            200: '#F5F5F5',
            800: '#424248',
            900: '#181822',
        },
        primary: {
            contrastText: '#FFF',
            dark: '#0052a4',
            light: '#5facff',
            main: '#037dd6',
        },
        secondary: {
            contrastText: '#FFFFFF',
            dark: '#A18245',
            light: '#BEA470',
            main: '#B6995E',
        },
        text: {
            secondary: '#464646',
        },
    },
    props: {
        MuiButtonBase: {
            color: 'primary',
        },
    },
    shape: {
        borderRadius: 0,
    },
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
