import * as React from 'react'
import styled from 'styled-components'

const DialogIconStyle = styled.div`
    border-bottom: 80px solid #fafafa;
    border-right: 30px solid transparent;
    border-top-left-radius: 5px;
    position: absolute;
    top: -13px;
    width: 55px;
    left: 0;
`

const DialogIcon: React.SFC<any> = () => <DialogIconStyle />

export default DialogIcon