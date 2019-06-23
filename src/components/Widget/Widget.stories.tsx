import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/AddCircleOutline'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ShareIcon from '@material-ui/icons/Share'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { withKnobs } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import Widget from './Widget'

storiesOf('Components/Widget', module)
    .addDecorator(jsxDecorator)
    .addDecorator(withKnobs)
    .add('normal', () => {
        const title = text('Title', 'Mission')
        const subheader = text('Subheader', 'this is a mission subheader test')
        const headerButtons = [
            {
                action: () => action('onVertButton'),
                component: <MoreVertIcon />,
            },
            { component: <AddIcon />, action: () => action('onAddButton') },
        ]

        return (
            <Widget
                title={title}
                subheader={subheader}
                headerButtons={headerButtons}
            >
                <Typography variant='body2' color='textSecondary' component='p'>
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                </Typography>
            </Widget>
        )
    })
    .add('with footer buttons', () => {
        const title = text('Title', 'Mission')
        const subheader = text('Subheader', 'this is a mission subheader test')
        const footerButtons = [
            {
                action: () => action('onFavoriteButton'),
                component: <FavoriteIcon />,
            },
            { component: <ShareIcon />, action: () => action('onShareButton') },
        ]
        const headerButtons = [
            { component: <AddIcon />, action: () => action('onAddButton') },
        ]

        return (
            <Widget
                title={title}
                subheader={subheader}
                footerButtons={footerButtons}
                headerButtons={headerButtons}
            >
                <Typography variant='body2' color='textSecondary' component='p'>
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                </Typography>
            </Widget>
        )
    })
    .add('with selector', () => {
        const title = text('Title', 'Mission')
        const subheader = text('Subheader', 'this is a mission subheader test')

        const headerButtons = [
            { component: <AddIcon />, action: () => action('onAddButton') },
        ]

        return (
            <Widget
                title={title}
                titleWithSelect={true}
                subheader={subheader}
                headerButtons={headerButtons}
            >
                <Typography variant='body2' color='textSecondary' component='p'>
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                </Typography>
            </Widget>
        )
    })
