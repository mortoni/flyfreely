import * as React from 'react'
import styled from 'styled-components'

const DialogIconStyle = styled.div`
    border-bottom: 80px solid ${(props) => props.theme.palette.grey[100]};
    border-right: 30px solid transparent;
    border-top-left-radius: 5px;
    position: absolute;
    top: -13px;
    width: 85px;
    left: 0;
`

const DialogIcon: React.SFC<any> = () => <DialogIconStyle />

export default DialogIcon
