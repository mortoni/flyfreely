import database from 'database'
import * as React from 'react'

interface FetchProps {
    url: string
}

interface FecthState {
    data: any
    err: boolean
    loading: boolean
}

export default class Fetch extends React.Component<FetchProps, FecthState> {
    constructor(props: any) {
        super(props)
        this.state = {
            data: undefined,
            err: false,
            loading: false,
        }
    }

    public componentDidMount() {
        this.fetchData()
    }

    public render() {
        const { children } = this.props
        const { data, loading, err } = this.state

        return typeof children === 'function'
            ? children({
                  data,
                  err,
                  loading,
                  refetch: this.fetchData,
              })
            : false
    }

    private fetchData() {
        this.setState({ ...this.state, loading: true })
        this.makeNetworkRequest()
    }

    private makeNetworkRequest() {
        setTimeout(() => {
            this.setState({
                data: database[this.props.url],
                err: false,
                loading: false,
            })
        }, 2222)
    }
}
