import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import * as React from 'react'
import ReactMapboxGl, { Feature, Layer } from 'react-mapbox-gl'

export interface MapProps {
    width: any
}

const Map: React.SFC<MapProps> = ({ width, ...props }) => {
    const ReactMap = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoibW9ydG9uaSIsImEiOiJjaXYzOXE0bXYwMWM2Mm90YmV3aGJoYWtvIn0.oVEPUNVTai26CGUQPUIJLQ',
        interactive: false,
        scrollZoom: false,
    })

    const isMobile = isWidthUp(width, 'xs')

    return (
        <ReactMap
            style='mapbox://styles/mapbox/streets-v9'
            containerStyle={{
                height: isMobile ? '250px' : '475px',
                width: '100vw',
            }}
        >
            <Layer
                type='symbol'
                id='marker'
                layout={{ 'icon-image': 'marker-15' }}
            >
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
        </ReactMap>
    )
}

export default withWidth()(Map)
