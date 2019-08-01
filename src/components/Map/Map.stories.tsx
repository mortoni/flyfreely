import { action, object } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Map from './Map'

storiesOf('Components/Mapbox', module).add('normal', () => <Map />)
