import * as React from 'react'
import styled from 'styled-components'

const Icon = styled.div`
    border-bottom: 80px solid #fafafa;
    border-right: 30px solid transparent;
    border-top-left-radius: 5px;
    position: absolute;
    top: -12px;
    width: 85px;
`

const WidgetIcon: React.SFC = () => <Icon />

export default WidgetIcon
