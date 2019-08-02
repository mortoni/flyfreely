import * as React from 'react'

export interface DialogInterface {
    actions: any
    children: any
    fullScreen: boolean
    fullWidth: boolean
    maxWidth: string
    open: boolean
    title: string
}

export interface DialogContextInterface {
    dialog: DialogInterface
    handleDialog: any
}

export const defaultDialog: DialogInterface = {
    actions: null,
    children: null,
    fullScreen: false,
    fullWidth: true,
    maxWidth: 'md',
    open: false,
    title: '',
}

export const DialogContext = React.createContext<DialogContextInterface>({
    dialog: defaultDialog,
    handleDialog: () => {},
})
