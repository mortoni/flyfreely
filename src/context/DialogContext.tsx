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

const initialState: DialogInterface = {
    actions: null,
    children: null,
    fullScreen: false,
    fullWidth: true,
    maxWidth: 'md',
    open: false,
    title: '',
}

const DialogContext: any = React.createContext(initialState)

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
        <DialogContext.Provider value={value}>
            {children}
        </DialogContext.Provider>
    )
}

const DialogContexConsumer = DialogContext.Consumer

export {
    DialogContext,
    DialogContextProvider,
    DialogContexConsumer,
    DialogInterface,
}
