import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import Table from 'components/Table'
import * as React from 'react'

const FlightHistory: React.SFC = ({}) => {
    const options = {
        padding: 'dense',
        paging: false,
        search: false,
    }

    const columns = [
        { title: 'Date', field: 'date' },
        { title: 'Mission Id', field: 'missionId' },
        { title: 'Flights', field: 'flights' },
    ]

    const data = [
        {
            date: '21th Nov 2018',
            flights: '2h 8s',
            missionId: '1047',
        },
        {
            date: '25th Nov 2018',
            flights: '1m 18s',
            missionId: '1049',
        },
    ]

    return (
        <Grid container spacing={2}>
            <Grid xs={12} item>
                <Card>
                    <CardContent>
                        <Typography variant='h5' gutterBottom>
                            Summary
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                            <strong>Total Flights:</strong> 2
                        </Typography>

                        <Typography variant='body2' gutterBottom>
                            <strong>Total Flights Time:</strong> 2m 3s
                        </Typography>

                        <Typography variant='body2' gutterBottom>
                            <strong>Last Mission:</strong> 3rd Jan 2019
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid xs={12} item>
                <Card>
                    <CardContent>
                        <Typography variant='h5' gutterBottom>
                            Historical Flights Log Book
                        </Typography>

                        <Typography variant='body2' gutterBottom>
                            No historical flights information recorded
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid xs={12} item>
                <Card>
                    <CardContent>
                        <Table
                            columns={columns}
                            data={data}
                            options={options}
                            style={{
                                backgroundColor: '#fff',
                            }}
                            title='Logged Flights'
                        />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default FlightHistory
