import { object } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Menu from './Menu'

const menu = object('menu', [
    { label: 'Missions', icon: '', route: '', selected: true },
    { label: 'Personnel', icon: '', route: '', selected: true },
    { label: 'Locations', icon: '', route: '', selected: true },
    { label: 'Approvals', icon: '', route: '', selected: true },
    { label: 'RPA', icon: '', route: '', selected: true },
    { label: 'Maintenance', icon: '', route: '', selected: true },
    {
        icon: '',
        label: 'Flight Battery Sets',
        route: '',
        selected: true,
    },
    { label: 'Batteries', icon: '', route: '', selected: true },
    { label: 'Labraries', icon: '', route: '', selected: true },
    { label: 'Reporting', icon: '', route: '', selected: true },
    {
        icon: '',
        label: 'Incident Reports',
        route: '',
        selected: true,
    },
    { label: 'Risk Register', icon: '', route: '', selected: true },
])

storiesOf('Components/Menu', module).add('normal', () => <Menu menu={menu} />)
