import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { WidgetContex, WidgetInterface } from 'context/WidgetContext'
import * as React from 'react'
import styled from 'styled-components'

const FlyCheckbox = styled(Checkbox)`
    && {
        position: absolute;
        right: 0;
    }
`
const FlyLabel = styled(FormControlLabel)`
    && {
        justify-content: flex-end;
        width: 100%;
    }
`

const FlyItem = styled(MenuItem)`
    && {
        padding-top: 0px;
        padding-bottom: 0px;
    }
`

const MenuOptions: React.SFC = () => {
    const { widgets, dispatch } = React.useContext(WidgetContex)
    const toggleWidget = (index: number) =>
        dispatch({ type: 'toggle', payload: index })

    return (
        <MenuList>
            {widgets.map((widget: WidgetInterface, index: number) => (
                <FlyItem key={widget.label}>
                    {React.createElement(widget.icon, {
                        key: widget.key,
                    })}
                    <FlyLabel
                        value={widget.key}
                        control={
                            <FlyCheckbox
                                color='primary'
                                checked={widget.selected}
                                onChange={() => toggleWidget(index)}
                            />
                        }
                        label={widget.label}
                        labelPlacement='start'
                    />
                </FlyItem>
            ))}
        </MenuList>
    )
}

export default MenuOptions
