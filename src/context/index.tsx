import * as React from 'react'
import { DialogContextProvider } from './DialogContext'
import { WidgetContextProvider } from './WidgetContext'

interface ContextInterface {
    children: any
}

const Context: React.SFC<ContextInterface> = ({ children }) => {
    return (
        <WidgetContextProvider>
            <DialogContextProvider>{children}</DialogContextProvider>
        </WidgetContextProvider>
    )
}

export default Context
