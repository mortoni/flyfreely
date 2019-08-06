import * as React from 'react'

interface DialogInterface {
    actions: any
    children: any
    fullScreen: boolean
    fullWidth: boolean
    maxWidth: string
    open: boolean
    title: string
}

interface DialogContextInterface {
    dialog: DialogInterface
    dispatch: any
}

const initialState: DialogInterface = {
    actions: null,
    children: null,
    fullScreen: false,
    fullWidth: true,
    maxWidth: 'md',
    open: false,
    title: '',
}

const DialogContex: any = React.createContext(initialState)

const reducer = (dialog: DialogInterface, action: any) => {
    switch (action.type) {
        case 'reset':
            return initialState
        case 'open':
            return { ...dialog, ...action.payload }
        case 'close':
            return { ...dialog, open: false }
        default:
            return dialog
    }
}

const DialogContextProvider: React.SFC<any> = ({ children }) => {
    const [dialog, dispatch] = React.useReducer(reducer, initialState)
    const value = { dialog, dispatch }

    return (
        <DialogContex.Provider value={value}>{children}</DialogContex.Provider>
    )
}

const DialogContexConsumer = DialogContex.Consumer

export {
    DialogContex,
    DialogContextProvider,
    DialogContexConsumer,
    DialogInterface,
}
