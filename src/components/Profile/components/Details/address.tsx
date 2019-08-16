import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Table from 'components/Table'
import * as React from 'react'

const Address: React.SFC = ({}) => {
    const options = {
        padding: 'dense',
        paging: false,
        search: false,
    }

    const [state, setState] = React.useState({
        columns: [
            { title: 'Type', field: 'type' },
            { title: 'Street', field: 'street' },
            { title: 'Suburb', field: 'suburb' },
            { title: 'State', field: 'state' },
            { title: 'Postcode', field: 'postcode' },
            { title: 'Country', field: 'country' },
        ],
        data: [
            {
                country: 'Australia',
                postcode: '4178',
                state: 'QLD',
                street: '130 Singer Street',
                suburb: 'Wynnum',
                type: 'Residential',
            },
        ],
    })
    return (
        <Card>
            <CardContent>
                <Table
                    columns={state.columns}
                    data={state.data}
                    editable={{
                        onRowAdd: (newData: any) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve()
                                    const data = [...state.data]
                                    data.push(newData)
                                    setState({ ...state, data })
                                }, 600)
                            }),
                        onRowDelete: (oldData: any) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve()
                                    const data = [...state.data]
                                    data.splice(data.indexOf(oldData), 1)
                                    setState({ ...state, data })
                                }, 600)
                            }),
                        onRowUpdate: (newData: any, oldData: any) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve()
                                    const data = [...state.data]
                                    data[data.indexOf(oldData)] = newData
                                    setState({ ...state, data })
                                }, 600)
                            }),
                    }}
                    options={options}
                    style={{
                        backgroundColor: '#fff',
                    }}
                    title='Addresses'
                />
            </CardContent>
        </Card>
    )
}

export default Address
