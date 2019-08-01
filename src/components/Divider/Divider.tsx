import * as React from 'react'
import styled from 'styled-components'

interface DividerComponentProps {
    margin?: string
}

const defaultProps: DividerComponentProps = {
    margin: '10px 0px',
}

const Divider = styled.div`
    margin: ${(margin) => `${margin}`};
    overflow: hidden;
    height: 5px;
    &:after {
        content: '';
        display: block;
        margin: -25px auto 0;
        width: 100%;
        height: 25px;
        border-radius: 125px / 12px
        box-shadow: ${(props) => `0 0 8px ${props.theme.palette.primary.main}`}
    }
`

const DividerComponent: React.SFC<DividerComponentProps> = () => <Divider />

DividerComponent.defaultProps = defaultProps

export default DividerComponent
