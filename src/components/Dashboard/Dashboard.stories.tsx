import * as React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import Dashboard from './Dashboard'


storiesOf('Dashboard', module)
    .addDecorator(withKnobs)
    .add('normal', () => (
        <Dashboard />
    ));
