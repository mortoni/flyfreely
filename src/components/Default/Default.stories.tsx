import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../../utils/wInfo';
import Default from './Default';

const stories = storiesOf('Components/Default', module);
stories.addDecorator(withKnobs);

stories.add(
    'default',
    wInfo()(() => (
        <Default />
    )),
);
