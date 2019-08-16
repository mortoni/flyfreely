import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Table from 'components/Table'
import * as React from 'react'

const Organisations: React.SFC = ({}) => {
    const options = {
        padding: 'dense',
        paging: false,
        search: false,
    }

    const [state, setState] = React.useState({
        columns: [{ title: 'Organisation', field: 'organisation' }],
        data: [
            { organisation: 'OwnReOc Organisation No Workflow' },
            { organisation: 'Own ReOC Admin' },
            { organisation: 'Own ReOC' },
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
                    title='Managing Organisations'
                />
            </CardContent>
        </Card>
    )
}

export default Organisations
