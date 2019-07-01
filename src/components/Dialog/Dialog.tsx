import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import * as React from 'react'
import styled from 'styled-components'
import DialogIcon from './components/DialogIcon'

export interface FlyDialogProps {
    title: string
    children?: any
    actions?: any
    fullWidth?: boolean
    open: boolean
    maxWidth?: any
    fullScreen: boolean
}

interface OtherProps {
    handleClose: any
}

const FlyDialogTitle = styled(DialogTitle)`
    background-color: ${(props) => props.theme.palette.primary.main};
    max-height: 35px;
    padding-left: 85px !important;
    color: #fafafa;
    overflow: hidden;
    display: flex;
    flex-direction: row;
`
const FlyDialogContent = styled(DialogContent)`
    background-color: #fafafa;
`

const FlyDialogActions = styled(DialogActions)`
    background-color: #fafafa;
`

const Title = styled.div``

const FlyDialog = styled(Dialog)``

const CloseButton = styled(IconButton)`
    position: absolute !important;
    right: 8px;
    top: 8px;
`

const FlyDialogProps: React.SFC<FlyDialogProps & OtherProps> = ({
    title,
    children,
    actions,
    fullWidth,
    open,
    maxWidth,
    handleClose,
    fullScreen,
}) => {
    return (
        <FlyDialog
            disableBackdropClick
            fullScreen={fullScreen}
            fullWidth={fullWidth}
            open={open}
            onClose={handleClose}
            maxWidth={maxWidth}
            aria-labelledby='max-width-dialog-title'
            PaperProps={{
                style: {
                    overflowY: 'unset',
                },
            }}
        >
            <FlyDialogTitle disableTypography id='max-width-dialog-title'>
                <DialogIcon />

                <Typography variant='h6'>{title}</Typography>
                <CloseButton
                    aria-label='Close'
                    color='inherit'
                    onClick={handleClose}
                >
                    <CloseIcon />
                </CloseButton>
            </FlyDialogTitle>

            <FlyDialogContent>{children}</FlyDialogContent>
            <FlyDialogActions>{actions}</FlyDialogActions>
        </FlyDialog>
    )
}

export default FlyDialogProps
