import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { WidgetContext, WidgetContextInterface } from 'context/WidgetContext'

import * as React from 'react'
import styled from 'styled-components'

export interface MenuOptionsProps {}

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

const MenuOptions: React.SFC<MenuOptionsProps> = () => (
    <WidgetContext.Consumer>
        {({ widgets, handleWidget }: WidgetContextInterface) => (
            <MenuList>
                {widgets.map((item: any, index: number) => (
                    <FlyItem key={item.label}>
                        {React.createElement(item.icon, {
                            key: item.key,
                        })}
                        <FlyLabel
                            value={item.key}
                            control={
                                <FlyCheckbox
                                    color='primary'
                                    checked={item.selected}
                                    onChange={() => handleWidget(item, index)}
                                />
                            }
                            label={item.label}
                            labelPlacement='start'
                        />
                    </FlyItem>
                ))}
            </MenuList>
        )}
    </WidgetContext.Consumer>
)

export default MenuOptions
