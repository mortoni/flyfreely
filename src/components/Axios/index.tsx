import axios from 'axios'
import debounce from 'lodash/debounce'
import isEqual from 'lodash/isEqual'
import * as React from 'react'

class Axios extends React.Component {
    public static propTypes = {
        url: PropTypes.string.isRequired,
        method: PropTypes.string,
        data: PropTypes.objectOf(PropTypes.any),
        params: PropTypes.objectOf(PropTypes.any),
        children: PropTypes.func.isRequired,
        responseType: PropTypes.string,
        transformRequest: PropTypes.arrayOf(PropTypes.func),
        transformResponse: PropTypes.arrayOf(PropTypes.func),
        headers: PropTypes.objectOf(PropTypes.any),
    }

    public static defaultProps = {
        method: 'get',
        data: null,
        params: {},
        responseType: 'json',
        transformRequest: [(data) => data],
        transformResponse: [(data) => data],
        headers: {},
    }

    public state = {
        data: undefined,
        loading: false,
        err: false,
    }

    constructor(props) {
        super(props)
        this.cancelToken = null
        this.makeNetworkRequest = debounce(
            this.makeNetworkRequest.bind(this),
            200,
        )
        this.fetchData = this.fetchData.bind(this)
    }

    public componentDidMount() {
        this.fetchData()
    }

    public componentDidUpdate({ children: _, ...prevProps }) {
        const { children, ...props } = this.props

        if (!isEqual(prevProps, props)) {
            this.fetchData()
        }
    }

    public componentWillUnmount() {
        if (this.cancelToken) {
            this.cancelToken()
        }
    }

    public makeNetworkRequest() {
        const {
            url,
            method,
            params,
            data,
            responseType,
            transformRequest,
            transformResponse,
            headers,
        } = this.props

        return axios({
            url,
            method,
            params,
            data,
            responseType,
            transformRequest,
            transformResponse,
            headers,
            cancelToken: new axios.CancelToken((token) => {
                this.cancelToken = token
            }),
        })
            .then((response) => {
                this.cancelToken = null
                this.setState({
                    data: response.data,
                    loading: false,
                    err: false,
                })
            })
            .catch((e) => {
                // Early return if request was cancelled
                if (axios.isCancel(e)) {
                    return
                }

                this.setState({
                    data: undefined,
                    err: e.message,
                    loading: false,
                })
            })
    }

    public fetchData() {
        if (this.cancelToken) {
            this.cancelToken()
        }

        this.setState({ data: undefined, err: false, loading: true })
        this.makeNetworkRequest()
    }

    public render() {
        const { children } = this.props
        const { data, loading, err } = this.state

        return typeof children === 'function'
            ? children({
                  data,
                  loading,
                  err,
                  refetch: this.fetchData,
              })
            : false
    }
}

export default Axios
