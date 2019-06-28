import * as React from 'react'
import { Transition } from 'react-transition-group'
import styled from 'styled-components'

interface AnimateWidgetProps {
    animate: boolean
    duration: number
    children: any
}

interface AnimationProps {
    duration: number
    state: string
}

const Animation = styled.div<AnimationProps>`
    transition: ${({ duration }) => `opacity ${duration}ms ease-in-out`}
    opacity: ${({ state }) => {
        switch (state) {
            case 'entering':
                return 1
            case 'entered':
                return 1
            default:
                return 0
        }
    }};
`

const AnimateWidget: React.SFC<AnimateWidgetProps> = ({
    animate,
    duration,
    children,
}) => {
    return (
        <Transition in={animate} unmountOnExit enter={true} timeout={duration}>
            {(state) => (
                <Animation state={state} duration={duration}>
                    {children}
                </Animation>
            )}
        </Transition>
    )
}

export default AnimateWidget
