import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import { DialogContext } from 'context/DialogContext'
import * as React from 'react'
import styled from 'styled-components'
import DialogIcon from './components/DialogIcon'

const FlyDialogTitle = styled(DialogTitle)`
    background-color: ${(props) => props.theme.palette.primary.main};
    max-height: 65px;
    padding-left: 85px !important;
    color: ${(props) => props.theme.palette.grey[100]};
    overflow: hidden;
    display: flex;
    flex-direction: row;
`
const FlyDialogContent = styled(DialogContent)`
    background-color: ${(props) => props.theme.palette.grey[100]};
`

const FlyDialogActions = styled(DialogActions)`
    background-color: ${(props) => props.theme.palette.grey[100]};
`

const FlyDialog = styled(Dialog)``

const CloseButton = styled(IconButton)`
    position: absolute !important;
    right: 8px;
    top: 8px;
`

const FlyDialogProps: React.SFC = () => {
    const { dialog, dispatch } = React.useContext(DialogContext)

    return (
        <FlyDialog
            disableBackdropClick
            fullScreen={dialog.fullScreen}
            fullWidth={dialog.fullWidth}
            open={dialog.open}
            onClose={() => dispatch({ type: 'close' })}
            maxWidth={dialog.maxWidth}
            {...dialog}
            aria-labelledby='max-width-dialog-title'
            PaperProps={{
                style: {
                    height: '100%',
                    overflowY: 'unset',
                },
            }}
        >
            <FlyDialogTitle disableTypography id='max-width-dialog-title'>
                <DialogIcon />

                <Typography variant='h6'>{dialog.title}</Typography>
                <CloseButton
                    aria-label='Close'
                    color='inherit'
                    onClick={() => dispatch({ type: 'close' })}
                >
                    <CloseIcon />
                </CloseButton>
            </FlyDialogTitle>

            <FlyDialogContent>
                {/* {React.createElement(dialog.children, {})} */}
                {dialog.children}
            </FlyDialogContent>
            <FlyDialogActions>{dialog.actions}</FlyDialogActions>
        </FlyDialog>
    )
}

export default FlyDialogProps
