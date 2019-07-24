import * as React from 'react'
import { Else, If, Then } from 'react-if'
import Loader from 'react-loader-spinner'
import styled, { withTheme } from 'styled-components'

interface SpinnerProps {
    condition: boolean
}

const defaultProps: SpinnerProps = {
    condition: false,
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const FlySpinner = styled(Loader).attrs(({ theme }) => ({
    color: theme.palette.primary.main,
    height: '50',
    type: 'Plane',
    width: '50',
}))``

const Spinner: React.SFC<SpinnerProps> = ({ condition, children }) => {
    return (
        <Container>
            <If condition={condition}>
                <Then>
                    <FlySpinner />
                </Then>
                <Else>{children}</Else>
            </If>
        </Container>
    )
}

Spinner.defaultProps = defaultProps

export default withTheme(Spinner)
